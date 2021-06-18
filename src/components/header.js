/** NAVIGATION **/
import * as React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "gatsby" 
import { useStaticQuery, graphql } from "gatsby" 

 const Header = () => {
   const data = useStaticQuery(graphql`
        query HeaderQuery {
            site {
                siteMetadata {
                    nav {
                        name
                        url
                    }
                title
            }
        }
    }
`
)

const title = data.site.siteMetadata?.title
const nav = data.site.siteMetadata?.nav
  return (
        <Navbar className="nav fixed-top" collapseOnSelect expand="lg" bg="white" variant="light">
            <Navbar.Brand href="/"> {title} </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="nav justify-content-end" id="responsive-navbar-nav">
                <Nav className="justify-content-center" >
                    {nav.map((data, index) => {
                        return (  
                            <Nav.Item key={{index}}>
                                <Link to={data.url} className="nav-link" activeClassName="nav-active">{data.name}</Link>
                            </Nav.Item> 
                        )})}
                </Nav>   
            </Navbar.Collapse>
        </Navbar>          
   )
 }
 
export default Header