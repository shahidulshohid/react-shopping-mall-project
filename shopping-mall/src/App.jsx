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

  const [price, setPrice] = useState(500)

  const handleIncreasePrice = pr => {
    setPrice(price + pr)
  }
  const handleDeletePrice = id => {
    const product = selectedProducts.find(p => p.id === id)
    setPrice(price - product.price)
  }

  const handleDelete = (id) => {
    handleDeletePrice(id)
    const remaining = selectedProducts.filter(p => p.id !== id)
    setSelectedProducts(remaining)
  }
  console.log(selectedProducts)

  const handleSelectedProduct = product => {
    const isExist = selectedProducts.find(p => p.id === product.id)
    if(isExist){
      alert('product already exist')
    }
    else{
      handleIncreasePrice(product.price)
      const newProducts = [...selectedProducts, product]
      setSelectedProducts(newProducts)
    }
  }

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
    <Navbar selectedProducts={selectedProducts} price={price}></Navbar>
    <div className="flex">
    <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>
    <CartContainer handleIsActiveState={handleIsActiveState} isActive={isActive} selectedProducts={selectedProducts} handleDelete={handleDelete}></CartContainer>
    </div>
    </>
  )
}

export default App
