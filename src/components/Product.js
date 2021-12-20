import React from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

export const Product = ({ product }) => {
  return (
    <Col xs={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <ListGroup>
            <ListGroupItem>
              Categoria: <Card.Link href="#">{product.category}</Card.Link>
            </ListGroupItem>
            <ListGroupItem>
              <Badge bg="success">Precio: ${product.price}</Badge>
            </ListGroupItem>
          </ListGroup>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
