import SelectedProduct from "./SelectedProduct"
import { productInfo } from "../productInfo"
import AccountBalance from "./AccountBalance"
import TotalPrice from "./TotalPrice"
import Menu from "./Menu"
import CheckoutButton from "./CheckoutButton"
import { Dispatch, SetStateAction, useState } from "react"

type SelectedProductsProps = {
  productInfo: productInfo[]
  cart: string[]
  setCart: Dispatch<SetStateAction<string[]>>
}

function SelectedProducts( {
  productInfo,
  cart,
  setCart
}: SelectedProductsProps
) {
  const [balance, setBalance] = useState(0);
  const [price, setPrice] = useState(0)
  const reduceBalance = () => {setBalance(balance-price)}

  console.log('selectedProducs', cart)


  const products: productInfo[] = productInfo
  function productImageForID(id: string) : string {
    return products.filter((product) => product.id === id)[0].img
  }
  function productNameForID(id: string) : string {
    return products.filter((product) => product.id === id)[0].productName
  }
  function productPriceForID(id: string) : number {
    return products.filter((product) => product.id === id)[0].price
  }
  const allSelectedProducts = () => {return cart.map(
    (id, index) => {
      return <SelectedProduct 
      key={`selected-product-${index}`}
      id={id} 
      setCart={setCart} 
      cart={cart}
      productImage={productImageForID(id)} 
      productName={productNameForID(id)} 
      price={productPriceForID(id)}
      />
    }
  )}

  return (
    <>
    <div className="grid grid-cols-1 gap-4 justify-items-center overflow-y-auto py-3">
      {allSelectedProducts()}
    </div>
    <div className=' bottom-0 flex justify-between left-0 w-full bg-gradient-to-b from-slate-600 to bg-slate-800 p-4 rounded-lg'>
            <AccountBalance balance={balance}/>
            <TotalPrice price={price} setPrice={setPrice}/>
            <CheckoutButton onCheckout={reduceBalance}/> 
            <Menu />   
          </div>
    </>
  )
}

export default SelectedProducts