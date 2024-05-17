import Product from "./Product"
import { productInfo } from "../productInfo"
import { useEffect } from "react"
import axios  from "axios"

type AllProductsProps = {
  productInfo: productInfo[]
  cart: string[]
  setCart: (strings: string[]) => void
}

function AllProducts({productInfo, cart, setCart}: AllProductsProps 
){

  

  const products: productInfo[] = productInfo
  const allProducts = () => { return products.map((product) => {
    return <Product price={product.price} name={product.productName} productImage={product.img} id={product.id} cart={cart} setCart={setCart}/>
  })}

  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center relative">
        {allProducts()}
    </div>
  )
}

export default AllProducts