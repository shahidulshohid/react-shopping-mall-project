import AllProducts from "./components/AllProducts/AllProducts"
import CartContainer from "./components/CartContainer/CartContainer"
import Navbar from "./components/Header/Navbar"
import './App.css'
function App() {

  return (
    <>
    <Navbar></Navbar>
    <div className="flex">
    <AllProducts></AllProducts>
    <CartContainer></CartContainer>
    </div>
    </>
  )
}

export default App
