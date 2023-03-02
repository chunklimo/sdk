import {GetMetricsResp, GetLastFeedsResp} from "./types";
import OracleReaderAbi from "./OracleReaderAbi.json";
import { Contract, EventData } from "web3-eth-contract";
import { Subscription } from "web3-core-subscriptions";
import { WebsocketProvider, Log } from "web3-core";
import { AbiItem } from "web3-utils";
import Web3 from "web3";
import BigNumber from "bignumber.js";

BigNumber.config({
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
  EXPONENTIAL_AT: 1e9,
  DECIMAL_PLACES: 18,
});

class OracleReader {
  private BN = (num: BigNumber.Value): BigNumber => new BigNumber(num);
  private ORACLE_READER_ADDRESS = "0x315DF327dA070746F2364246D1bED8ab46F44dc9";
  private provider: WebsocketProvider;
  private web3: Web3;
  private contract: Contract;

  constructor(oracleFallbackAddress?: string) {
    if (oracleFallbackAddress) this.ORACLE_READER_ADDRESS = oracleFallbackAddress;
    this.provider = new Web3.providers.WebsocketProvider(
      "wss://wss.chain.multidata.ai/"
    );
    this.web3 = new Web3(this.provider);
    this.contract = new this.web3.eth.Contract(OracleReaderAbi as AbiItem[], this.ORACLE_READER_ADDRESS);
  }

  getMetrics = (): Promise<GetMetricsResp> =>
    this.contract.methods.getMetrics().call();

  getMetricsCount = (): Promise<number> =>
    this.contract.methods.getMetricsCount().call();

  hasMetric = (id: string | number): Promise<boolean> =>
    this.contract.methods.hasMetric(id).call();

  onFeedsUpdated = (
    eventHandler: (error: Error, log: Log) => void
  ): Subscription<Log> =>
    this.web3.eth.subscribe('logs', {
      address: this.ORACLE_READER_ADDRESS,
      topics: [
        this.web3.utils.sha3('MetricsUpdated(uint256)')
      ]
    }, eventHandler)

  getLastFeedsByIds = (ids: string[] | number[], formatted = false) =>
    new Promise<GetLastFeedsResp>((resolve, reject) =>
      this.contract.methods
        .quoteMetrics(ids)
        .call()
        .then((resp: [string, string][]) =>
          resolve(resp.map((el) => ({
            value: formatted
              ? this.BN(el[0]).div(this.BN(2).pow(112)).toFixed(2)
              : el[0],
            updateTS: el[1],
          })))
        )
    );
}

export default OracleReader;
