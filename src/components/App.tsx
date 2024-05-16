import { useState } from 'react'
import AllProducts from './AllProducts'
import SelectedProducts from './SelectedProducts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='flex bg-blue-500'>
        <div className='w-9/12 p-4'>
          <AllProducts />
        </div>
        <div className='w-3/12 bg-blue-700 p-4 rounded-l-2xl'>
          <SelectedProducts />
        </div>
      </div>

    </>
  )
}

export default App
