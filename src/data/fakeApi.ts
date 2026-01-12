import products from "./products";
import { ProductType } from "../types/productType"; 

export interface FetchProductsResponse{
    data:ProductType[]
    hasMore:boolean
}

export const fetchProducts=({page,limit}:{page:number,limit:number}):Promise<FetchProductsResponse>=>{
    return new Promise((res, rej)=>[
        setTimeout(()=>{
            const startIndex=(page-1)*limit;
            const endIndex=startIndex+limit;
            const productsToDisplay=products.slice(startIndex,endIndex);
            res({
                data:productsToDisplay,
                hasMore:endIndex<products.length
            })
        },1000)
    ])
};