import AllProducts from './AllProducts'
import SelectedProducts from './SelectedProducts'
import CheckoutButton from './CheckoutButton'
import AccountBalance from './AccountBalance'
import { useState } from 'react'
import TotalPrice from './TotalPrice'
import { ProductInfo } from '../productInfo'
import Menu from './Menu.tsx'

import { useEffect } from 'react'
import axios from "axios"

function App() {

  const [productsData, setProductsData] = useState<ProductInfo[]>([])
  const [cart, setCart] = useState<string[]>([])

  console.log(cart)

  

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/products',
      )
  
      if (!response) {
        throw new Error('There was an error')
      }

       const data: ProductInfo[] = await response!.data
       await setProductsData(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  
  return (
    <>
      <div className='flex bg-slate-600'>
        <div className='w-9/12 p-4 max-h-screen overflow-y-auto'>
          <AllProducts productsData={productsData} cart={cart} setCart={setCart}/>
        </div>
        <div className='flex flex-col justify-between w-3/12 bg-gradient-to-b from-orange-500 to-red-700 p-4 rounded-l-2xl h-screen'>
          <SelectedProducts productsData={productsData} cart={cart} setCart={setCart}/>
          
        </div>
        <div className='relative bottom-0 left-0 h-4 blur-sm'></div>
      </div>
    </>
  )
}

export default App
