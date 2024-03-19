import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbaar from './components/Navbaar'
import Mc from './components/Mc'
import Card1 from './components/cards/Card1'
import Card2 from './components/cards/Card2'
import Card3 from './components/cards/Card3'
import Card4 from './components/cards/Card4'
import Collectibles from './components/Collectibles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Navbaar />
      <Mc />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Collectibles />
    </>
  </React.StrictMode>,
)
