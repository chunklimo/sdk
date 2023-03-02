type Metric ={
  currency: string;
  description: string;
  length: number;
  name: string;
}

export type GetMetricsResp = Metric[]

type Feed = {
  updateTS: string
  value: string
}

export type GetLastFeedsResp = Feed[]
