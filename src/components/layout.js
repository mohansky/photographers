/** LAYOUT COMPONENT **/
import * as React from "react" 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer"
import Header from "./header"; 

const Layout = ({children}) => {

return (
    <>
      <Header/> 
        <div className="main-container"  >    
          <main>{children}</main> 
        </div>
      <Footer/>
    </>
  )
}

export default Layout
