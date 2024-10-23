import AllProducts from "./components/AllProducts/AllProducts"
import CartContainer from "./components/CartContainer/CartContainer"
import Navbar from "./components/Header/Navbar"
import './App.css'
import { useState } from "react"
function App() {

  const [isActive, setIsActive] = useState({
    cart:true,
    status:"cart"
  })

  const [selectedProducts, setSelectedProducts] = useState([])

  const handleSelectedProduct = product => {
    const isExist = selectedProducts.find(p => p.id === product.id)
    if(isExist){
      alert('product already exist')
    }
    else{
      const newProducts = [...selectedProducts, product]
      setSelectedProducts(newProducts)
    }
  }
  console.log(selectedProducts)

  const handleIsActiveState = (status) => {
    if(status === "cart"){
      setIsActive({
        cart:true,
      status:"cart"
      })
    }
    else{
      setIsActive({
        cart:false,
      status:"about"
      })
    }
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="flex">
    <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>
    <CartContainer handleIsActiveState={handleIsActiveState} isActive={isActive}></CartContainer>
    </div>
    </>
  )
}

export default App
