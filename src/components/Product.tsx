

type ProductProps = {
    productImage: string
    price: number
    name: string
}

function Product(
    {price, name, productImage}: ProductProps
) {

  const selectProduct = (productName: string) => console.log(`product selected ${productName}`)
  return (  
    <div onClick={() => selectProduct(name)} className="w-3/5 cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
      <img className="rounded-lg ko0ioo9 object-cover object-center aspect-auto max-h-40" src={productImage} alt="product" />
      <p className="my-4 pl-4 font-bold text-gray-500">{name}</p>
      <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">{price}€</p>
    </div>
  )
}

export default Product