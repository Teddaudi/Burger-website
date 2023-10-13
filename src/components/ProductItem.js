import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRipple } from 'mdb-react-ui-kit'
import React from 'react'

const ProductItem = ({products,handleAddToCart}) => {
  return (
    <MDBCol md="12" lg="3" className="mb-4 ">
    <MDBCard>
        <MDBRipple rippleColor="light"
            rippleTag="div"
            className="bg-image rounded hover-zoom">
            <MDBCardImage className="w-100" src={products.image} fluid alt='...' />
            <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
        </MDBRipple>
        <MDBCardBody>
            <MDBCardTitle className="card-title mb-3">{products.title}</MDBCardTitle>
            <MDBCardText className="mb-3">
                Ksh {products.price}
            </MDBCardText>
            <MDBBtn href='#' className="btn btn-warning mb-3" onClick={() => handleAddToCart(products)}>Add To Cart</MDBBtn>
        </MDBCardBody>
    </MDBCard>
</MDBCol>
  )
}

export default ProductItem