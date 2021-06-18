/** CONTACT PAGE **/
import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo" 
import Form from "../components/form"
import { Col, Row, Container } from "react-bootstrap"
import { Telephone, Instagram, Envelope } from "react-bootstrap-icons";

const Conatct = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const social = data.site.siteMetadata?.social
 
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Contact" />
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h3 className="pb-3">Get in touch.</h3>
                <a href={`mailto:/${social?.email || ``}`}  >
                  <p className="pb-1"> <Envelope /> {social?.email}  </p>
                </a>

                <a href={`https:/instagram.com/${social?.instagram || ``}`} target="_blank" rel="noreferrer">
                  <p className="pb-1"> <Instagram/> {social?.instagram} </p>
                </a>

                <a href={`tel:${social?.phone || ``}`}  >
                  <p className="pb-1"> <Telephone/> {social?.phone} </p>
                </a>
            </Col>
            
            <Col xs={12} md={6}>
              <Form/> 
            </Col>
          </Row>
        </Container>
    </Layout>
  )
}

export default Conatct

export const pageQuery = graphql`
  query {
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
`
