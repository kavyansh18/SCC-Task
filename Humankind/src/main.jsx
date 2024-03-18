import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbaar from './components/Navbaar'
import Mc from './components/Mc'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Navbaar />
      <Mc />
    </>
  </React.StrictMode>,
)
