import React from "react";
import { Card, Button } from "react-bootstrap";
function Home(props) {
  console.warn("Home", props);
  return (
    <>
      <h1>Home component</h1>
      
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.recallfirsthand.com/wp-content/uploads/2019/04/iphone-7plus-red.jpg"
        />
        <Card.Body>
          <Card.Title>I-Phone</Card.Title>
          <Card.Text>Price : $1200.00</Card.Text>
          <Button variant="danger"
            onClick={() => {props.addTocartHandler({ price: 1000,name:"iphone 13" })}}>Add to cart</Button>

          <Button variant="success"
            onClick={() => {props.removeTocartHandler()}}>Remove to cart</Button>  
        </Card.Body>
      </Card>
    </>
  );
}
export default Home;
