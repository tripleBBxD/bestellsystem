import { Dispatch, SetStateAction } from "react"


type ProductProps = {
    id: string
    productImage: string
    price: number
    name: string
    cart: string[]
    setCart: Dispatch<SetStateAction<string[]>>
}

function Product(
    {id, price, name, productImage, cart, setCart}: ProductProps
) {

  const selectProduct = (id: string) => setCart(cart.concat([id]))
  return (  
    <div onClick={() => selectProduct(id)} className="w-3/5 cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img className="rounded-lg ko0ioo9 object-cover object-center aspect-auto max-h-40" src={productImage} alt="product" />
      <p className="my-4 pl-4 font-bold text-gray-500">{name}</p>
      <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">{price}€</p>
    </div>
  )
}

export default Product