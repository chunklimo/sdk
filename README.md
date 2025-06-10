# chunk-oracle-sdk

SDK for multidata oracle

## Installation

#### Using npm
```bash
$ npm install @multidata/sdk
```
#### Using Yarn
```bash
$ yarn add debug @multidata/sdk
```

## Usage

```js
import OracleReader from '@multidata/sdk';

const reader = new OracleReader();

// getPriceById([ids], [, formatted])
reader.getPriceById(1, true).then((resp) => console.log('resp', resp));
```

## API
| Method            | Return type       | Description                   |
|-------------------|-------------------|-------------------------------|
| getMetrics        | Promise<Metric[]> | Return all metrics properties |
| getLastFeedsByIds | Promise<Price[]>  | Return price by id or name    |
| getMetricsCount   | Promise\<number>  | Return total metrics count    |
| hasMetric         | Promise\<boolean> | Check if Metric exist         |
| onFeedsUpdated    | Subscription<Log> | Subscribe to update event     |
  
  
  
# Chunk contracts

## Delta feeds

| Chain    | [DeltaFeeds](https://github.com/chunklimo/validator/blob/main/contracts/DeltaFeeds.sol)                                          | [MultidataFeedsProxy](https://github.com/chunklimo/validator/blob/main/contracts/MultidataFeedsProxy.sol)                        | [UnitMultidataOracle](https://github.com/chunklimo/validator/blob/main/contracts/UnitMultidataOracle.sol)                        | [ChainlinkCompatibility](https://github.com/chunklimo/validator/blob/main/contracts/ChainlinkCompatibility.sol)                  | [Helper](https://github.com/chunklimo/validator/blob/main/contracts/Helper.sol)                                        |
|----------|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| mainnet  | [0x7F55EE2aCEFeC4599a53B516a18b6b90d4A90663](https://etherscan.io/address/0x7F55EE2aCEFeC4599a53B516a18b6b90d4A90663)            | [0x11da6b6e5D62F0DC798933A926019e70Cbe5aB9a](https://etherscan.io/address/0x11da6b6e5D62F0DC798933A926019e70Cbe5aB9a)            | [0xd63bDDf50659ed7BFa75Fa13b12fEEbafA58B623](https://etherscan.io/address/0xd63bDDf50659ed7BFa75Fa13b12fEEbafA58B623)            | [0xea6E5D71A2211B511c62d5043598eDD8Ee413186](https://etherscan.io/address/0xea6E5D71A2211B511c62d5043598eDD8Ee413186)            | [0xB7600dFE45c64f31B49Df345E0E4cd2a0Cfb6d28](https://gnosisscan.io/address/0xB7600dFE45c64f31B49Df345E0E4cd2a0Cfb6d28) |
| arbitrum | [0x7F55EE2aCEFeC4599a53B516a18b6b90d4A90663](https://arbiscan.io/address/0x7F55EE2aCEFeC4599a53B516a18b6b90d4A90663)             | [0x11da6b6e5D62F0DC798933A926019e70Cbe5aB9a](https://arbiscan.io/address/0x11da6b6e5D62F0DC798933A926019e70Cbe5aB9a)             | [0xea6E5D71A2211B511c62d5043598eDD8Ee413186](https://arbiscan.io/address/0xea6E5D71A2211B511c62d5043598eDD8Ee413186)             | [0x56130c63B8929e311522F8b374B4c45Fa9B684ac](https://arbiscan.io/address/0x56130c63B8929e311522F8b374B4c45Fa9B684ac)             | [0x73669BAC0C407375A7f917420ac075CEEfE88e44](https://gnosisscan.io/address/0x73669BAC0C407375A7f917420ac075CEEfE88e44) |
| base     | [0x7F55EE2aCEFeC4599a53B516a18b6b90d4A90663](https://basescan.org/address/0x7F55EE2aCEFeC4599a53B516a18b6b90d4A90663)            | [0x11da6b6e5D62F0DC798933A926019e70Cbe5aB9a](https://basescan.org/address/0x11da6b6e5D62F0DC798933A926019e70Cbe5aB9a)            | [0xea6E5D71A2211B511c62d5043598eDD8Ee413186](https://basescan.org/address/0xea6E5D71A2211B511c62d5043598eDD8Ee413186)            | [0x56130c63B8929e311522F8b374B4c45Fa9B684ac](https://basescan.org/address/0x56130c63B8929e311522F8b374B4c45Fa9B684ac)            | [0x59d0374D4299a450054C005DC2CdcD32A842e1c1](https://gnosisscan.io/address/0x59d0374D4299a450054C005DC2CdcD32A842e1c1) |
| optimism | [0x7F55EE2aCEFeC4599a53B516a18b6b90d4A90663](https://optimistic.etherscan.io/address/0x7F55EE2aCEFeC4599a53B516a18b6b90d4A90663) | [0x11da6b6e5D62F0DC798933A926019e70Cbe5aB9a](https://optimistic.etherscan.io/address/0x11da6b6e5D62F0DC798933A926019e70Cbe5aB9a) | [0xea6E5D71A2211B511c62d5043598eDD8Ee413186](https://optimistic.etherscan.io/address/0xea6E5D71A2211B511c62d5043598eDD8Ee413186) | [0x56130c63B8929e311522F8b374B4c45Fa9B684ac](https://optimistic.etherscan.io/address/0x56130c63B8929e311522F8b374B4c45Fa9B684ac) | [0x79c5491c67ea6F21C74713dCF9e5b4CC1F5DA70B](https://gnosisscan.io/address/0x79c5491c67ea6F21C74713dCF9e5b4CC1F5DA70B) |


## Median feeds

| Chain | [MedianFeeds](https://github.com/chunklimo/validator/blob/main/contracts/MedianFeeds.sol)                                            | [MultidataFeedsProxy](https://github.com/chunklimo/validator/blob/main/contracts/MultidataFeedsProxy.sol)                            | [UnitMultidataOracle](https://github.com/chunklimo/validator/blob/main/contracts/UnitMultidataOracle.sol)                            | [ChainlinkCompatibility](https://github.com/chunklimo/validator/blob/main/contracts/ChainlinkCompatibility.sol)                      | [Helper](https://github.com/chunklimo/validator/blob/main/contracts/Helper.sol)                                                      |
|-------|--------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| midl  | [0x1736Fab0ebc45cdD19a8BF8f0202B69AD5E73582](https://blockscout.regtest.midl.xyz/address/0x1736Fab0ebc45cdD19a8BF8f0202B69AD5E73582) | [0xa2f8464888BD75c2cd9f2e161ef7258FD5164bFB](https://blockscout.regtest.midl.xyz/address/0xa2f8464888BD75c2cd9f2e161ef7258FD5164bFB) | [0x9985Dc95Da85479D508b883049b3bFadF25DdA98](https://blockscout.regtest.midl.xyz/address/0x9985Dc95Da85479D508b883049b3bFadF25DdA98) | [0x0c143313A958DbB89fE7b2eaCA1F7A7c3E3aF812](https://blockscout.regtest.midl.xyz/address/0x0c143313A958DbB89fE7b2eaCA1F7A7c3E3aF812) | [0xc03f3e0E97dB66a26898F56C7954b0e5a8069C7e](https://blockscout.regtest.midl.xyz/address/0xc03f3e0E97dB66a26898F56C7954b0e5a8069C7e) |



