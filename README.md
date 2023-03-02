# multidata-oracle-sdk

SDK for multidata oracle

## Installation

#### Using npm
```bash
$ npm install @unitprotocol/multidata-sdk
```
#### Using Yarn
```bash
$ yarn add debug @unitprotocol/multidata-sdk
```

## Usage

```js
import OracleReader from '@unitprotocol/multidata-sdk';

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
