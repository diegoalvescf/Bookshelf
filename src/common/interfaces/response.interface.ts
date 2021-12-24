export interface IResponse<IData = any> {
  num_results: number;
  results?: IData;
}
