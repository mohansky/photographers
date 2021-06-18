/** FOOTER COMPONENT **/

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby" 
 import { Row, Container } from "react-bootstrap"
 
 const Footer = () => {
   const data = useStaticQuery(graphql`
     query FooterQuery {
       site {
         siteMetadata {
           author {
             name
             summary
           }
          social {
            instagram
            phone
            email
          }
         }
       }
     }
   `)

// Set these values by editing "siteMetadata" in gatsby-config.js
// const author = data.site.siteMetadata?.author
const social = data.site.siteMetadata?.social
 
   return (
        <>
            <footer>
              <Container fluid>
                <Row className="d-flex flex-md-row flex-sm-column justify-content-between text-center">
                  <a href={`mailto:/${social?.email || ``}`}  >
                    {social?.email}
                  </a>
                  <a href={`https:/instagram.com/${social?.instagram || ``}`} target="_blank" rel="noreferrer">
                    {social?.instagram}
                  </a>
                  <a href={`tel:${social?.phone || ``}`}  >
                    {social?.phone}
                  </a>
                </Row>  
              </Container>            
            </footer>
            
        {/* BOOTSTRAP */}
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
            <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
            <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
            <script>var Alert = ReactBootstrap.Alert;</script>
        </> 
   )
 }
 
 export default Footer
 