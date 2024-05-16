

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

    <div onClick={() => selectProduct(name)}>
        <div className="mx-auto px-5 ">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
        <img className="w-full rounded-lg ko0ioo9 object-cover object-center" src={productImage} alt="product" />
        <p className="my-4 pl-4 font-bold text-gray-500">{name}</p>
        <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">{price}$</p>
        </div>
        </div>
    </div>

  )
}

export default Product