type Metric ={
  currency: string;
  description: string;
  length: number;
  name: string;
}

export type GetMetricsResp = Metric[]

type Price = {
  updateTS: string
  value: string
}

export type GetPricesResp = Price[]
