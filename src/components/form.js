/** FORM COMPONENT **/

import * as React from "react"
//import { useStaticQuery, graphql } from "gatsby" 
import { Form, Button  } from "react-bootstrap"

const ConactForm = () => {
  return (
    <div className="form">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Snow" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="john.snow@email.com" />
            </Form.Group>
             
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button className="btn" variant="dark" as="input" type="submit" value="Submit" /> 
          </Form>
    </div>
  )
}

export default ConactForm
