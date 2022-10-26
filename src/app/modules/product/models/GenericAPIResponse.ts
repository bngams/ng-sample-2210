export interface GenericAPIResponse<T> {
  data: T,
  total: number, 
  skip: number,
  limit: number
}