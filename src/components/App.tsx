import AllProducts from './AllProducts'
import SelectedProducts from './SelectedProducts'
import CheckoutButton from './CheckoutButton'
import AccountBalance from './AccountBalance'
import { useState } from 'react'
import TotalPrice from './TotalPrice'
import { productInfo } from '../productInfo'
import Menu from './Menu.tsx'

import { useEffect } from 'react'
import axios from "axios"

function App() {


  const [balance, setBalance] = useState(0);
  const [price, setPrice] = useState(0)
  const [productsData, setProductsData] = useState<productInfo[]>([])
  const [cart, setCart] = useState<string[]>([])

  const reduceBalance = () => {setBalance(balance-price)}

  

  const fetchProducts = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3000/products',
      })
  
      if (!response) {
        throw new Error('There was an error')
      }
      setCart(["1","2","3"])
       const data = await response!.data
       let dataAsProductInfo: productInfo[] = data
       await setProductsData(dataAsProductInfo)
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
          <AllProducts productInfo={productsData} cart={cart} setCart={setCart}/>
        </div>
        <div className='flex flex-col justify-between w-3/12 bg-gradient-to-b from-orange-500 to-red-700 p-4 rounded-l-2xl h-screen'>
          <SelectedProducts productInfo={productsData} cart={cart} setCart={setCart}/>
          <div className=' bottom-0 flex justify-between left-0 w-full bg-gradient-to-b from-slate-600 to bg-slate-800 p-4 rounded-lg'>
            <AccountBalance balance={balance}/>
            <TotalPrice price={price}/>
            <CheckoutButton onCheckout={reduceBalance}/> 
            <Menu />   
          </div>
        </div>
        <div className='relative bottom-0 left-0 h-4 blur-sm'></div>
      </div>
    </>
  )
}

export default App
