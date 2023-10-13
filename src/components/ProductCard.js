import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";
import './ProductCard.css'
// import data from '../data'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from './util/Spinner';
import ProductItem from './ProductItem';


const ProductCard = ({ addToCart,menu,loading }) => {
    const [count, setCount] = useState(0)
    //const [loading, setLoading] = useState(true);
    const [menuItems, setMenuItems] = useState([])
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 35000);
    //     axios.get('https://burger-6t4w.onrender.com/menu')
    //         .then(response => {
    //             setMenuItems(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching menu:', error);
    //         });
    // }, []);
    const handleAddToCart = (product) => {
        addToCart(product);
        setCount(count + 1);
    };
    return (
        <div>
            {loading ? <Spinner /> : <MDBContainer fluid className="my-5 text-center">

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
                        menu.map((products) => (
                           <ProductItem key={products.id} products={products} handleAddToCart={handleAddToCart}/>
                        ))
                    }
                </MDBRow>
            </MDBContainer>}

        </div>
    )
}

export default ProductCard;
