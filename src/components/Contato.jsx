import React, {Component} from 'react'
import { Jumbotron, Row, Col, Form, Image} from 'react-bootstrap'
import './Contato.css'


class Contato extends Component {
	render(){
		return (
			<div>
			  <Row>
			   <Col  xs={12} sm={12} >
			   	  <Image src="assets/11.jpg" className="banner" />
			   </Col>
			  </Row>
			 <Jumbotron>
			  <Row className="form">
			  <h2>Mensagem:</h2><br></br>
			    <Form>
			      <Form.Group as={Row} constrolId="formBasicEmail">
			        <Form.Label column sm="2">
			          Nome
			        </Form.Label>
			        <Col sm="10">
			          <Form.Control placeholder="Digite seu nome" />
			        </Col>
			      </Form.Group>
			      <Form.Group as={Row} constrolId="formBasicEmail">
			        <Form.Label column sm="2">
			          E-mail
			        </Form.Label>
			        <Col sm="9">
			          <Form.Control type="email" placeholder="Digite seu e-mail"/>
			        </Col>
			      </Form.Group>
			      <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Mensagem</Form.Label>
                      <Form.Control as="textarea" rows="10" />
                  </Form.Group>
			    </Form>
			  </Row>
			  </Jumbotron>
			</div>
			)
	}
}

export default Contato