import React from "react";
import { Card, Button } from "react-bootstrap";
function Home() {
  return (
    <>
      <div className="add-to-cart">
        <img src="https://www.mangoextensions.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/j/ajaxaddtocartsite.jpg" alt="" />
       </div>
      <h1>Home component</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://www.recallfirsthand.com/wp-content/uploads/2019/04/iphone-7plus-red.jpg"/>
        <Card.Body>
          <Card.Title>I-Phone</Card.Title>
          <Card.Text>Price : $1200.00</Card.Text>
          <Button variant="danger">Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  );
}
export default Home;
