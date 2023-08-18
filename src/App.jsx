import './App.css'
import {BrowserRouter , Routes, Route} from  "react-router-dom"
import NavBar from './components/NavBar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import  ShopContextProvider  from './context/Shop-Context'


function App() {

  return (
  <div className="App">
    <ShopContextProvider>
<BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/" element={<Shop />}/>
    <Route path="/cart" element={<Cart />} />
  </Routes>
</BrowserRouter>
</ShopContextProvider>
  </div>

  )
}

export default App
