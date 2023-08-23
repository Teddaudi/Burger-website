import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRipple,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
} from "mdb-react-ui-kit";
import './ProductCard.css'
// import data from '../data'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import axios from 'axios';


const ProductCard = ({ addToCart }) => {
    const[count,setCount]=useState(0)
    const[menuItems,setMenuItems]=useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/menu')
        .then(response => {
            setMenuItems(response.data);
          })
          .catch(error => {
            console.error('Error fetching menu:', error);
          });
    
      }, []);
    return (
        <div>
            <MDBContainer fluid className="my-5 text-center">

                <h4 className="mt-4 mb-5">
                    <strong>Our Menu</strong>
                    <Link to="/">
                        <AiOutlineArrowLeft color='black' fontSize='2.5em' onMouseOver={({ target }) => target.style.color = "orange"}
                            onMouseOut={({ target }) => target.style.color = "black"} className='d-flex ' id='leftArrow' key={1} />
                    </Link>
                    <Link to='/cart'>
                        <BsFillCartPlusFill className='cart-icon' key={2} />
                        <div className='count'>
                            <div className='cart-count'>{count} </div>
                        </div>
                    </Link>

                </h4>

                <MDBRow>

                    {
                        menuItems.map((products) => (
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
                                        <MDBBtn href='#' className="btn btn-warning mb-3" onClick={() => addToCart(products)}>Add To Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ))
                    }
                </MDBRow>
            </MDBContainer>

        </div>


    )
}

export default ProductCard;

{ /*<MDBCard>
                                 <MDBRipple
                                     rippleColor="light"
                                     rippleTag="div"
                                     className="bg-image rounded hover-zoom"
                                 >
                                     <MDBCardImage
                                         src={products.image}
                                         fluid
                                         className="w-100"
                                     />
                                     <a href="#!">
                                         <div className="mask">
                                             <div className="d-flex justify-content-start align-items-end h-100">
                                                 <h5>
                                                     <span className="badge bg-primary ms-2">New</span>
                                                 </h5>
                                             </div>
                                         </div>
                                         <div className="hover-overlay">
                                             <div
                                                 className="mask"
                                                 style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                             ></div>
                                         </div>
                                     </a>
                                 </MDBRipple>
                                 <MDBCardBody>
                                     <a href="#!" className="text-reset">
                                         <h5 className="card-title mb-3">{products.title}</h5>
                                     </a>
                                     <button type="button" className="btn btn-warning mb-3" onClick={() => addToCart(products)}>Add To Cart</button>

                                     <h6 className="mb-3">Ksh {products.price}</h6>
                                 </MDBCardBody>
                            </MDBCard>*/}