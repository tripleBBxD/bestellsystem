import AllProducts from './AllProducts'
import SelectedProducts from './SelectedProducts'
import CheckoutButton from './CheckoutButton'
import AccountBalance from './AccountBalance'

function App() {
  return (
    <>
      <div className='flex bg-slate-600'>
        <div className='w-9/12 p-4 max-h-screen overflow-y-scroll'>
          <AllProducts />
        </div>
        <div className='w-3/12 bg-gradient-to-b from-orange-500 to-red-700 p-4 rounded-l-2xl overflow-y-scroll'>
          <SelectedProducts />
        </div>
        <div className='relative bottom-0 left-0 h-4 blur-sm'></div>
      </div>
      <div className='absolute bottom-0 flex justify-end left-0 w-full bg-slate-600 outline p-4'>
        <CheckoutButton />
      </div>
      <div className='absolute bottom-0 left-0 w-full p-4 justify-start flex align-middle'>
       <AccountBalance balance={50}/>    
      </div>
    </>
  )
}

export default App
