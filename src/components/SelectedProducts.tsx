import Product from "./Product"
import viteLogo from "../assets/react.svg" 

function SelectedProducts(
) {

  return (
    <>
    <div className="place-content-center grid grid-cols-1 gap-4">
    <Product price={3} name={"1"} productImage={viteLogo}/>
    <Product price={3} name={"1"} productImage={viteLogo}/>
    </div>
    </>
  )
}

export default SelectedProducts