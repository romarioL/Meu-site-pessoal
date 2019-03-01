import React, {Component} from 'react'
import {Jumbotron, Row, Col, Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Home.css'



class Home extends Component {
	render(){
		return (
			<div>
			  <Jumbotron>
			     <h1>Seu  cientista maluco favorito!</h1>
			     <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
                 </p>
                <Link to ="/contato">
                  <Button variant="primary">Me chame</Button>
                </Link>
			  </Jumbotron>
			  <Row>
			    <Col xs={12} sm={12}>
			    	<Image src="assets/09.jpg" className="banner" />
			    </Col>
			  </Row>
			  <Row>
			    <Col xs={12} sm={12} className="text-banner">
			        O mundo é cheio de coisas maravilhosas para se ver.
			        <Link to="/experimentos">
			          <Button variant="primary">Veja</Button>
			        </Link>
			    </Col>
			  </Row>
			  <Row>
			    <Col xs={12} sm={12}>
			    	<Image src="assets/10.jpg" className="banner" />
			    </Col>
			  </Row>
			  <Row>
			    <Col xs={12} sm={12} className="text-banner">
			        As melhores  viagens  literárias.
			        <Link to="/textos">
			          <Button variant="primary">Deleite-se</Button>
			        </Link>
			    </Col>
			  </Row>
			  <Row>
			    <Col xs={12} sm={12}>
			    	<Image src="assets/11.jpg" className="banner" />
			    </Col>
			  </Row>
			  <Row>
			    <Col xs={12} sm={12} className="text-banner">
			          A ideia ideal para  seu projeto
			        <Link to="/projetos">
			          <Button variant="primary">Se inspire</Button>
			        </Link>
			    </Col>
			  </Row>
			</div>
			)
	}
}

export default Home