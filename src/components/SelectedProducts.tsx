import SelectedProduct from "./SelectedProduct"
import { productInfo } from "../productInfo"

type SelectedProductsProps = {
  productInfo: productInfo[]
  cart: string[]
  setCart: (strings: string[]) => void
}

function SelectedProducts( {
  productInfo,
  cart,
  setCart
}: SelectedProductsProps
) {

  let orderValue :number
  const products: productInfo[] = productInfo
  const id: string = "3"
  console.log(cart.map(id => {return id}))
  const productImageForID (id: string)
  const allSelectedProducts = () => {return cart.map(
    (id) => {
      return <SelectedProduct 
      id={id} 
      setCart={setCart} 
      cart={cart}
      productImage={productInfo.map((product)=>{if (product.id == id) {return product.img}})[0]} 
      productName={productInfo.map((product)=>{if (product.id == id) {return product.productName} else {return ""}})[0]} 
      price={productInfo.map((product)=>{if (product.id == id) {return product.price} else {return ""}})[0]}
      />
    }
  )}

  return (
    <>
    <div className="grid grid-cols-1 gap-4 justify-items-center overflow-y-auto">
      {allSelectedProducts()}
    </div>
    </>
  )
}

export default SelectedProducts