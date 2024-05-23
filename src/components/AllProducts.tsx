import Product from "./Product"
import { productInfo } from "../productInfo"
import { Dispatch, SetStateAction, useEffect } from "react"
import axios  from "axios"

type AllProductsProps = {
  productInfo: productInfo[]
  cart: string[]
  setCart: Dispatch<SetStateAction<string[]>>
}

function AllProducts({productInfo, cart, setCart}: AllProductsProps 
){

  

  const products: productInfo[] = productInfo
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