import AllProducts from './AllProducts'
import SelectedProducts from './SelectedProducts'
import CheckoutButton from './CheckoutButton'
import AccountBalance from './AccountBalance'
import { useState } from 'react'
import TotalPrice from './TotalPrice'
import { productInfo } from '../productInfo'

function App() {
  const [balance, setBalance] = useState(0);
  const [price, setPrice] = useState(0)
  const reduceBalance = () => {setBalance(balance-price)}
  
  return (
    <>
      <div className='flex bg-slate-600'>
        <div className='w-9/12 p-4 max-h-screen overflow-y-scroll'>
          <AllProducts />
        </div>
        <div className='flex flex-col justify-between w-3/12 bg-gradient-to-b from-orange-500 to-red-700 p-4 rounded-l-2xl h-screen'>
          <SelectedProducts />
          <div className=' bottom-0 flex justify-between left-0 w-full bg-gradient-to-b from-slate-600 to bg-slate-800 p-4 rounded-lg'>
            <AccountBalance balance={balance}/>
            <TotalPrice price={price}/>
            <CheckoutButton onCheckout={reduceBalance}/>    
          </div>
        </div>
        <div className='relative bottom-0 left-0 h-4 blur-sm'></div>
      </div>
    </>
  )
}

export default App
