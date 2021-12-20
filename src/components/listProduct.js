import React from 'react'
import { Row } from 'react-bootstrap'
import json from '../examples/products.json'
import { Product } from './Product'

export const ListProduct = () => {

    const {products} = json
    return(
        <Row>
            {
                products.map((product, index) => (<Product key={index} product={product}/>))
            }
        </Row>
    )

}