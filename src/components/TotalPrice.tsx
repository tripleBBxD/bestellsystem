import { Dispatch, SetStateAction } from "react"
import { ProductInfo } from "../productInfo"

type TotalPriceProps = {
  setPrice: Dispatch<SetStateAction<number>>
  cart: string[]
  productsData: ProductInfo[]
}

function TotalPrice( {
  setPrice,
  cart, 
  productsData
  
}: TotalPriceProps

) {
  const products = productsData
  function productPriceForID(id: string) : number {
    return products.filter((product) => product.id === id)[0].price
  }

  const prices = cart.map(
    (id: string) => productPriceForID(id)
  )
  const price = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return (
    <>
    <p className="bg-white rounded-lg p-4">
        Price: {price}€
      </p>
    </>
  )
}

export default TotalPrice