/** TEST PAGE **/
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo" 
import { Col, Container, Row } from "react-bootstrap" 
import { StaticImage } from "gatsby-plugin-image"

const About = ({ location } ) => { 
   
return (
  <Layout location={location}  >
   <Seo title="About" /> 
    <Container>
      <Row>
        <Col md={4}>
          <StaticImage
              className="about-image"
              layout="constrained"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../images/about.jpg"
              alt="Profile picture"
            /> 
        </Col>

        <Col md={6}>
          <h4 class="display-4"> Lets get this going</h4>
            <p>
            Just say anything, George, say what ever's natural, the first thing that comes to your mind. 
            Take that you mutated son-of-a-bitch. My pine, why you. You space bastard, you killed a pine. 
            You do? Yeah, it's 8:00. Hey, McFly, I thought I told you never to come in here. Well it's gonna cost you. 
            How much money you got on you?
            </p>
            <p>
            Well, the way they make shows is, they make one show. That show's called a pilot. 
            Then they show that show to the people who make shows, and on the strength of that one show they decide 
            if they're going to make more shows. Some pilots get picked and become television programs. 
            Some don't, become nothing. She starred in one of the ones that became nothing.
            </p>
        </Col>
      </Row>
    </Container>
  </Layout>
  )}

export default About