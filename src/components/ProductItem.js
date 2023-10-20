import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRipple } from 'mdb-react-ui-kit'
import React from 'react'

const ProductItem = ({ product, handleAddToCart }) => {

    return (
        <MDBCol md="6" lg="3" className="mb-4">
            <MDBCard>
                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image rounded hover-zoom">
                    <MDBCardImage className="w-100" src={product.image} fluid alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle className="card-title mb-3">{product.title}</MDBCardTitle>
                    <MDBCardText className="mb-3">
                        Ksh {product.price}
                    </MDBCardText>
                    <MDBBtn href='#' className="btn btn-warning mb-3" onClick={() => handleAddToCart(product)}>Add To Cart</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>

    )
}

export default ProductItem