import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
// import Footer from "./components/Footer"



const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default App