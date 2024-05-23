import SelectedProduct from "./SelectedProduct"
import { ProductInfo } from "../productInfo"
import AccountBalance from "./AccountBalance"
import TotalPrice from "./TotalPrice"
import CheckoutButton from "./CheckoutButton"
import { Dispatch, SetStateAction, useState } from "react"
import MenuButton from "./MenuButton"
import Menu from "./Menu"

type SelectedProductsProps = {
  productsData: ProductInfo[]
  cart: string[]
  setCart: Dispatch<SetStateAction<string[]>>
}

function SelectedProducts( {
  productsData,
  cart,
  setCart
}: SelectedProductsProps
) {
  console.log(productsData)
  const [balance, setBalance] = useState(0);
  const [price, setPrice] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const reduceBalance = () => {setBalance(balance-price)}



  const products: ProductInfo[] = productsData
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
    <div className="bottom-0 left-0 w-full grid grid-cols-1 gap-2">
      {isMenuOpen && <Menu></Menu>}
      <div className='flex justify-between  bg-gradient-to-b w-full from-slate-600 to bg-slate-800 p-4 rounded-lg'>
        <AccountBalance balance={balance}/>
        <TotalPrice setPrice={setPrice} cart={cart} productsData={productsData}/>
        <CheckoutButton onCheckout={reduceBalance}/> 
        <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>   
      </div>
    </div>
   
    </>
  )
}

export default SelectedProducts