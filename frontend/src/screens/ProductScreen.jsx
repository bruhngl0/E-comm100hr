import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'

const ProductScreen = () => {

    const {id: productId} = useParams();
    const { data: product, isLoading, error} = useGetProductDetailsQuery(productId)

  return (

    <>

   
      <Link className='btn btn-light my-3' to='/'>
         Go Back
      </Link>   


      {isLoading ? (<Loader />) : error ? (<Message variant = 'danger'>{error?.data?.message || error.error}</Message>): (
         <Row>
         <Col md={5}>
             <Image src={product.image} fluid />
         </Col>
 
         <Col md={4}>
             <ListGroup variant= "flush">
 
                 <ListGroup.Item>
                 <h3>{product.name}</h3>
                 </ListGroup.Item>
 
                 <ListGroup.Item>
                 <Rating value={product.rating} text= {`${product.numReviews} reviews`}></Rating>
                 </ListGroup.Item>
 
                 <ListGroup.Item>
                 Price: ${product.price}
                 </ListGroup.Item>
 
 
                 <ListGroup.Item>
                 Description: ${product.description}
                 </ListGroup.Item>
             </ListGroup>
         </Col>
 
         <Col md={3}>
             <Card>
                 <ListGroup variant= 'flush'>
                     <ListGroup.Item>
                         <Row>
                             <Col>
                             Price:
                             </Col>
 
                             <Col>
                             <strong>${product.price}</strong>
                             </Col>
                         </Row>
                     </ListGroup.Item>
 
 
                     <ListGroup.Item>
                         <Row>
                             <Col>
                             Status:
                             </Col>
 
                             <Col>
                             <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                             </Col>
                         </Row>
                     </ListGroup.Item>
 
                     <ListGroup.Item>
                         <Button
                             className='btn-block'
                             type= 'button'
                             disabled = {product.countInStock === 0}
                             >
                                 Add To Cart
                             </Button>
 
                     </ListGroup.Item>
 
                 </ListGroup>
             </Card>
         </Col>
       </Row>
      )}
     
    </>
  )
}

export default ProductScreen



