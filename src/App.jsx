import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import InfoSection from "./components/InfoSection"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import CheckOut from "./pages/CheckOut"
import { useState } from "react"
import Order from "./pages/Order"
import FilteredData from "./pages/FilteredData"
import ProductDetail from "./pages/ProductDetail"
import Contacts from "./pages/Contacts"
import About from "./pages/About"



function App() {
  const[order, setOrder] = useState('null')

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/shop" element = {<Shop/>}/>
      <Route path="/cart" element = {<Cart/>}/>
      <Route path="/checkout" element = {<CheckOut setOrder={setOrder}/>}/>
      <Route path='/order-confirmation' element ={<Order order={order}/>} />
      <Route path='/filter-data' element ={<FilteredData/>} />
      <Route path='/product/:id' element ={<ProductDetail/>} />
      <Route path="/contacts" element = {<Contacts/>}/>
      <Route path="/about" element = {<About/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
