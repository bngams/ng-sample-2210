import { APIResponse } from "./APIResponse";
import { Product } from "./product";

export interface ProductAPIResponse 
  extends APIResponse {
  products: Product[]
}