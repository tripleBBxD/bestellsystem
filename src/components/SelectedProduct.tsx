

type SelectedProductProps = {
    id: string
    productImage: string
    price: number
    productName: string
    cart: string[]
    setCart: (strings: string[]) => void
}

function SelectedProduct(
    {id, price, productName, productImage, cart, setCart}: SelectedProductProps
) {
  let copyOfCart = cart
  copyOfCart.splice(cart.indexOf(id), 1)
  console.log(cart.indexOf(id))
  const selectProduct = (productName: string) => setCart(copyOfCart)
  return (  
    <div onClick={() => selectProduct(productName)} className="w-3/5 cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img className="rounded-lg ko0ioo9 object-cover object-center aspect-auto max-h-40" src={productImage} alt="product" />
      <p className="my-4 pl-4 font-bold text-gray-500">{productName}</p>
      <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">{price}€</p>
    </div>
  )
}

export default SelectedProduct