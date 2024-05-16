import Product from "./Product"
import { productInfo } from "../productInfo"

function AllProducts(
) {
  const products: productInfo[] = [
    {
      "id": "1",
      "name": "Fritz Kola",
      "price": 0,
      "img": "https://viel-durst.de/media/image/d2/1c/e1/Fritz-Kola-Kiste-24x0_33l-Glas-Flaschen-quer-Ki-Fl-Li-2022-01-21.jpg"
    },
    {
      "id": "1",
      "name": "Fritz Kola",
      "price": 0,
      "img": "https://viel-durst.de/media/image/d2/1c/e1/Fritz-Kola-Kiste-24x0_33l-Glas-Flaschen-quer-Ki-Fl-Li-2022-01-21.jpg"
    },
    {
      "id": "1",
      "name": "Fritz Kola",
      "price": 0,
      "img": "https://viel-durst.de/media/image/d2/1c/e1/Fritz-Kola-Kiste-24x0_33l-Glas-Flaschen-quer-Ki-Fl-Li-2022-01-21.jpg"
    },
    {
      "id": "1",
      "name": "Fritz Kola",
      "price": 0,
      "img": "https://viel-durst.de/media/image/d2/1c/e1/Fritz-Kola-Kiste-24x0_33l-Glas-Flaschen-quer-Ki-Fl-Li-2022-01-21.jpg"
    },
    {
      "id": "1",
      "name": "Fritz Kola",
      "price": 0,
      "img": "https://viel-durst.de/media/image/d2/1c/e1/Fritz-Kola-Kiste-24x0_33l-Glas-Flaschen-quer-Ki-Fl-Li-2022-01-21.jpg"
    },
  ]
  const allProducts = () => { return products.map((product) => {
    return <Product price={product.price} name={product.name} productImage={product.img}/>
  })}
  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center relative">
        {allProducts()}
    </div>
  )
}

export default AllProducts