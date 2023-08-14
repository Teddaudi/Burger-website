import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
} from "mdb-react-ui-kit";
import './ProductCard.css'
// import data from '../data'
import { AiOutlineArrowLeft, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const ProductCard = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/menu') // Replace with your backend API URL
            .then(response => response.json())
            .then(value => setData(value))
            .catch(error => console.error('Error fetching menu:', error));
    }, []);
    console.log(data)
    const[count,setCount]= useState(0)
const addCart = () =>{
   
   setCount((prev)=>prev+1)
   
    console.log(count)
}
    return (
        <div>
            <MDBContainer fluid className="my-5 text-center">

                <h4 className="mt-4 mb-5">
                    <strong>Our Menu</strong>
                    <Link to="/">
                        <AiOutlineArrowLeft color='black' fontSize='2.5em' onMouseOver={({ target }) => target.style.color = "orange"}
                            onMouseOut={({ target }) => target.style.color = "black"} className='d-flex ' id='leftArrow' />
                    </Link>
                    <Link to='/cart'>
                    <AiOutlineShoppingCart className='cart-icon ' size={40}/>
                    <div className='cart-count'>{count}</div>
                    </Link>
                </h4>

                <MDBRow>

                    {
                        data.map((products) => (
                            <MDBCol md="12" lg="3" className="mb-4 ">
                                <MDBCard>
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
                                        <button type="button" className="btn btn-warning mb-3" onClick={addCart}>Add To Cart</button>

                                        <h6 className="mb-3">Ksh {products.price}</h6>
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

export default ProductCard
             