import Product from "./Product"
import { ProductInfo } from "../productInfo"
import { Dispatch, SetStateAction, useEffect } from "react"
import axios  from "axios"

type AllProductsProps = {
  productsData: ProductInfo[]
  cart: string[]
  setCart: Dispatch<SetStateAction<string[]>>
}

function AllProducts({productsData: productInfo, cart, setCart}: AllProductsProps 
){

  

  const products: ProductInfo[] = productInfo
  const allProducts = () => { return products.map((product, index) => {
    return <Product key={`all-products-${index}`} price={product.price} name={product.productName} productImage={product.img} id={product.id} cart={cart} setCart={setCart}/>
  })}

  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center relative py-3">
        {allProducts()}
    </div>
  )
}

export default AllProducts