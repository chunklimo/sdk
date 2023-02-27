import {GetMetricsResp, GetPricesResp} from "./types";
import OracleReaderAbi from "./OracleReaderAbi.json";
import { Contract } from 'web3-eth-contract';
import {HttpProvider} from 'web3-core'
import {AbiItem} from 'web3-utils'

import Web3 from "web3";

class OracleReader {
  private ORACLE_READER_ADDRESS = '0x315DF327dA070746F2364246D1bED8ab46F44dc9'
  private provider: HttpProvider
  private web3: Web3
  private contract: Contract

  constructor() {
    this.provider = new Web3.providers.HttpProvider('https://rpc.chain.multidata.ai/')
    this.web3 = new Web3(this.provider)
    this.contract = new this.web3.eth.Contract(OracleReaderAbi as AbiItem[], this.ORACLE_READER_ADDRESS)
  }

  getMetrics = (): Promise<GetMetricsResp> => this.contract.methods.getMetrics().call()

  getPricesByIds = (ids: string[] | number[]): Promise<GetPricesResp> => this.contract.methods.quoteMetrics(ids).call()

  getPriceById = (id: string | number): Promise<GetPricesResp> => this.contract.methods.quoteMetrics([id]).call()

  getMetricsCount = (): Promise<number> => this.contract.methods.getMetricsCount().call()

  hasMetric = (id: string | number): Promise<boolean> => this.contract.methods.hasMetric(id).call()
}

export default OracleReader
