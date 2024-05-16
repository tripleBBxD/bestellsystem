import { useState } from 'react'
import AllProducts from './AllProducts'
import SelectedProducts from './SelectedProducts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=''>Vite</h1>
      <div className='flex'>
        <div className='w-9/12 bg-gray-500'>
          <AllProducts />
        </div>
        <div className='w-3/12 bg-blue-400'>
          <SelectedProducts />
        </div>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className=''>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default App
