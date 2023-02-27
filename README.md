# multidata-oracle-sdk

SDK for multidata oracle

## Installation

#### Using npm
```bash
$ npm install @unit-protocol/multidata-oracle-sdk
```
#### Using Yarn
```bash
$ yarn add debug @unit-protocol/multidata-oracle-sdk
```

## Usage

```js
import OracleReader from '@unit-protocol/multidata-oracle-sdk';

const reader = new OracleReader();

reader.getPriceById(1).then((resp) => console.log('resp', resp));
```

## API
| Method          | Return type       | Description                   |
|-----------------|-------------------|-------------------------------|
| getMetrics      | Promise<Metric[]> | Return all metrics properties |
| getPricesByIds  | Promise<Price[]>  | Return price by id or name    |
| getPriceById    | Promise<Price[]>  | Return price by id or name    |
| getMetricsCount | Promise\<number>  | Return total metrics count    |
| hasMetric       | Promise\<boolean> | Check if Metric exist         |
