import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../../Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>tailwind</h1>
      <p className="text-lg text-gray-800">
        This is a simple text paragraph.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click Me
      </button>
      <p className="text-xs">Extra Small</p>
      <p className="text-sm">Small</p>
      <p className="text-base">Base (Default)</p>
      <p className="text-lg">Large</p>
      <p className="text-xl">Extra Large</p>
      <p className="text-2xl">2XL</p>
      <p className="text-4xl font-bold">4XL (Big Heading)</p>

      <p className="text-red-500">Red Text</p>
      <p className="text-blue-500">Blue Text</p>
      <p className="text-green-500">Green Text</p>
      <p className="text-gray-500">Gray Text</p>
      <p className="text-yellow-500">Yellow Text</p>

      <Card/>


     </div>
    </>
  )
}

export default App
