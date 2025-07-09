import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css'

import Navbar_1 from './components/Navbar_1/Navbar_1.jsx';
import Navbar_Search from './components/Navbar_Search/Navbar_Search.jsx';
import Carousel_Daraz from './components/Carousel_1/Carousel_1.jsx';
import Cards from './components/Cards_D/Cards_D.jsx';
import Try_App from './components/Try_App/Try_App.jsx';

import { products } from './Data.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar_1 />
      <Navbar_Search />


      <Container>
        <Row>
          <Col xs={10} style={{ margin: "0px", padding: "0px", height: "370px"}}>
            <Carousel_Daraz />
          </Col>
          <Col xs={2} style={{ margin: "0px", padding: "0px", height: "370px"}}>
            
              <Try_App />
            
          </Col>
        </Row>

        <div>
          <h1>Just For You</h1>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", rowGap: "20px"}}>
            {products.map((e, i) => {
              return <Cards imgSrc={e.image} title={e.title} price={e.price} />;
            })}

          </div>
        </div>

      </Container>







    </>
  )
}

export default App
