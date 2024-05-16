import Product from "./Product"
import viteLogo from "../assets/react.svg"

function AllProducts(
) {
  
  return (
    <div className="grid grid-cols-3 gap-4">
        <Product price={3} name={"1"} productImage={viteLogo}/>
        <Product price={3} name={"2"} productImage={viteLogo}/>
        <Product price={3} name={"3"} productImage={viteLogo}/>
        <Product price={3} name={"4"} productImage={viteLogo}/>
        <Product price={3} name={"5"} productImage={viteLogo}/>
        <Product price={3} name={"6"} productImage={viteLogo}/>
        <Product price={3} name={"7"} productImage={viteLogo}/>
        <Product price={3} name={"8"} productImage={viteLogo}/>
        <Product price={3} name={"9"} productImage={viteLogo}/>
        <Product price={3} name={"10"} productImage={viteLogo}/>

    </div>
  )
}

export default AllProducts