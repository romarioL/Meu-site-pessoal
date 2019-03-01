import React, {Component} from 'react'
import {Jumbotron, Row, Col, Card, Image, Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Projetos.css'



class Projetos extends Component {
	render(){
		return (
			<div>
			   <Row>
                <Col xs={12} sm={12}>
                  <Image src="assets/09.jpg" className="banner" />
                </Col>
              </Row>
              <Row>
               <Col xs={12} sm={12} className="text-banner">
                   O mundo é uma fábrica
               </Col>
              </Row>
              <Container>
             <Row className="cards-row">
             <Col sm={12} md={6} lg={4}>
              <Card>
              <Card.Img variant="top" src="assets/09.jpg" className="img" />
              <Card.Body>
                 <Card.Title> Uma loucura qualquer</Card.Title>
              </Card.Body>
              <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
              </Card.Text>
              <Button variant="primary">Veja</Button>
              </Card>
             </Col>
             <Col sm={12} md={6} lg={4}>
              <Card>
              <Card.Img variant="top" src="assets/10.jpg" className="img" />
              <Card.Body>
                 <Card.Title> Uma loucura qualquer</Card.Title>
              </Card.Body>
              <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
              </Card.Text>
              <Button variant="primary">Veja</Button>
              </Card>
             </Col>
             <Col sm={12} md={6} lg={4}>
              <Card>
              <Card.Img variant="top" src="assets/11.jpg" className="img" />
              <Card.Body>
                 <Card.Title> Uma loucura qualquer</Card.Title>
              </Card.Body>
              <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
              </Card.Text>
              <Button variant="primary">Veja</Button>
              </Card>
             </Col>
             </Row>
             </Container>
             <Jumbotron>
			     <h1>O projeto do ano</h1>
			     <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
                 </p>
                <Link to ="/contato">
                  <Button variant="primary">Me chame</Button>
                </Link>
			  </Jumbotron>
			</div>
			)
	}
}

export default Projetos