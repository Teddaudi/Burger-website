import React, { useState } from "react";
import './CartCheckout.css'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRadio,
    MDBRipple,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBTooltip,
    MDBTypography,
} from "mdb-react-ui-kit";
import data from '../data'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FcSimCard } from "react-icons/fc"
import { ImBin } from 'react-icons/im'

export default function CartCheckout({ cartItems, removeFromCart }) {
    const [itemQuantities, setItemQuantities] = useState({});

    const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
    const shippingCost = 1;
    const Total = shippingCost + cartTotal;
    //payment
    const [name, setName] = useState('');
    const [orders, setOrders] = useState(cartItems);
    const [amount, setAmount] = useState(Total);
    const [msisdn, setMsisdn] = useState('');
    const [phone, setPhone] = useState('');
    const [accountNo, setAccountNo] = useState('200');
    const handleSubmit = async (e) => {
        e.preventDefault()
        handleOrders(e)
        const url = 'https://tinypesa.com/api/v1/express/initialize';
        const requestBody = new URLSearchParams({
            amount: amount,
            msisdn: msisdn,
            account_no: accountNo,
        });

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Apikey: 'CERkYjSdqXj',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: requestBody,
            });

            const data = await response.json();
        } catch (error) {
            console.error('API request error:', error);
        }
    };
    const handleRemoveFromCart = (itemToRemove) => {
        const indexToRemove = cartItems.findIndex(item => item.title === itemToRemove)
        if (indexToRemove !== -1) {
            cartItems.splice(indexToRemove, 1)
        } else {
            console.log(`Burger ${itemToRemove} not found in the array.`)
        }
        console.log(cartItems)
    }
    const handleOrders = async (e) => {
        e.preventDefault()
       
        console.log(name, msisdn, orders)
        try {
            const response = await fetch('http://localhost:4000/submit-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, msisdn, orders }),
            });

            if (response.status === 201) {
                const result = await response.json();
                alert(result.message); // Show a success message
                setName('');
                setMsisdn('');
                setOrders('');
            } else {
                const errorResult = await response.json();
                alert(errorResult.error); // Show an error message
            }

        } catch (error) {
            console.error(error);
            alert('Internal Server Error');
        }
    };
    return (
        <section className="h-100 h-custom">
            <MDBContainer className="py-5 h-100">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty !</p>
                ) : (
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol>
                            <MDBTypography tag="h7">
                                <Link to="/menu" className="text-body">
                                    <MDBIcon fas icon="long-arrow-alt-left me-2 mb-4" /> Continue
                                    shopping
                                </Link>
                            </MDBTypography>
                            <MDBTable responsive>
                                <MDBTableHead>
                                    <tr>
                                        <th scope="col" className="h5">
                                            Shopping Cart
                                        </th>
                                        <th scope="col">Items</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </MDBTableHead>
                                {
                                    cartItems.map((data) => (
                                        <MDBTableBody key={data.id}>
                                            <tr>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src={data.image}
                                                            fluid
                                                            className="rounded-3"
                                                            style={{ width: "120px" }}
                                                            alt="Book"
                                                        />

                                                    </div>
                                                </th>
                                                <td className="align-middle">
                                                    <p className="mb-0" style={{ fontWeight: "500" }}>
                                                        {data.title}
                                                    </p>
                                                </td>
                                                <td className="align-middle">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <MDBBtn className="px-2" color="link">
                                                            <ImBin color="#dc3545" onClick={() => handleRemoveFromCart(data)} />
                                                        </MDBBtn>


                                                    </div>
                                                </td>
                                                <td className="align-middle">
                                                    <p className="mb-0" style={{ fontWeight: "500" }}>
                                                        KSh {data.price}
                                                    </p>
                                                </td>
                                            </tr>


                                        </MDBTableBody>
                                    ))
                                }
                            </MDBTable>
                        </MDBCol>
                        <MDBCard
                            className="shadow-2-strong mb-5 mb-lg-0"
                            style={{ borderRadius: "16px" }}
                        >
                            <MDBCardBody className="p-4">
                                <MDBRow>
                                    <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">
                                        <form>

                                            <div className="d-flex flex-row pb-3">
                                                <div className="d-flex align-items-center pe-2">
                                                    <MDBRadio
                                                        type="radio"
                                                        name="radio1"
                                                        defaultChecked
                                                        value=""
                                                        aria-label="..."
                                                    />
                                                </div>
                                                <div className="rounded border w-100 p-3">
                                                    <p className="d-flex align-items-center mb-0">
                                                        <FcSimCard className="fa-2x text-dark pe-2" />
                                                        M-pesa
                                                    </p>
                                                </div>
                                            </div>
                                        </form>
                                    </MDBCol>
                                    <MDBCol md="6" lg="4" xl="6">
                                        <MDBRow>
                                            <MDBCol size="12" xl="6">
                                                <MDBInput
                                                    className="mb-4 mb-xl-5"
                                                    label="Full Name"
                                                    placeholder="John Smiths"
                                                    size="lg"
                                                    value={name}
                                                    onChange={(e) => { setName(e.target.value) }}
                                                />

                                            </MDBCol>

                                            <MDBCol size="12" xl="6">
                                                <MDBInput
                                                    className="mb-4 mb-xl-5"
                                                    label="M-pesa Phone Number"
                                                    placeholder="0707894407"
                                                    size="lg"
                                                    minlength={10}
                                                    maxlength={10}
                                                    value={msisdn}
                                                    onChange={(e) => { setMsisdn(e.target.value) }}
                                                />

                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCol>
                                    <MDBCol lg="4" xl="3">
                                        <div
                                            className="d-flex justify-content-between"
                                            style={{ fontWeight: "500" }}
                                        >
                                            <p className="mb-2">Subtotal</p>
                                            <p className="mb-2">Ksh {cartTotal}</p>
                                        </div>

                                        <div
                                            className="d-flex justify-content-between"
                                            style={{ fontWeight: "500" }}
                                        >
                                            <p className="mb-0">Shipping</p>
                                            <p className="mb-0">Ksh {shippingCost}</p>
                                        </div>

                                        <hr className="my-4" />

                                        <div
                                            className="d-flex justify-content-between mb-4"
                                            style={{ fontWeight: "500" }}
                                        >
                                            <p className="mb-2">Total </p>
                                            <p className="mb-2">Ksh {Total}</p>
                                        </div>

                                        <MDBBtn block size="lg" onClick={(e) => handleSubmit(e)}>
                                            <div className="d-flex justify-content-between">
                                                <span>Checkout</span>
                                                <span>Ksh {Total}</span>
                                            </div>
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBRow>
                )}
            </MDBContainer>
        </section>
    );
}


{/*<MDBInput
                                            min={0}
                                            type="number"
                                            size="sm"
                                            style={{ width: "50px" }}
                                            defaultValue={2}
                                        />

                                        <MDBBtn className="px-2" color="link">
                                            <MDBIcon fas icon="plus" />
</MDBBtn>*/}

// <section className="h-100 gradient-custom">

//     <MDBContainer className="py-5 h-100 ">
//         <h2>Your Cart</h2>
//         {cartItems.length === 0 ? (
//             <p>Your cart is empty</p>
//         ) : (
//             <MDBRow className="justify-content-center my-4 ">

//                 <MDBCol md="8">
//                     <MDBCard className="mb-4">

//                         <MDBCardHeader className="py-2 d-flex">
//                             <MDBTypography tag="h5" className="mb-0">
//                                 <Link to="/">
//                                     <AiOutlineArrowLeft color='black' fontSize='2.5em' onMouseOver={({ target }) => target.style.color = "orange"}
//                                         onMouseOut={({ target }) => target.style.color = "black"} className='d-flex mb-1 ' id='leftArrow' />
//                                 </Link>

//                             </MDBTypography>
//                         </MDBCardHeader>
//                         {
//                             cartItems.map((data) => (
//                                 <MDBCardBody>

//                                     <MDBRow>
//                                         <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
//                                             <MDBRipple rippleTag="div" rippleColor="light"
//                                                 className="bg-image rounded hover-zoom hover-overlay">
//                                                 <img
//                                                     src={data.image}
//                                                     className="w-100" />
//                                                 <a href="#!">
//                                                     <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
//                                                     </div>
//                                                 </a>
//                                             </MDBRipple>
//                                         </MDBCol>

//                                         <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
//                                             <p>
//                                                 <strong>{data.title}</strong>
//                                             </p>


//                                             <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
//                                                 title="Remove item">
//                                                 <MDBIcon fas icon="trash" onClick={() => removeFromCart(data)} />
//                                             </MDBTooltip>

//                                             <MDBTooltip wrapperProps={{ size: "sm", color: "danger" }} wrapperClass="me-1 mb-2"
//                                                 title="Move to the wish list">
//                                                 <MDBIcon fas icon="heart" />
//                                             </MDBTooltip>
//                                         </MDBCol>
//                                         <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
//                                             <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
//                                                 <MDBBtn
//                                                     className="px-3 me-2"
//                                                     onClick={() => handleQuantityChange(data, (itemQuantities[data.id] || 1) - 1)}
//                                                 >
//                                                     <MDBIcon fas icon="minus" />
//                                                 </MDBBtn>
//                                                 <MDBInput
//                                                     value={itemQuantities[data.id] || 1}
//                                                     min={0}
//                                                     type="number"
//                                                     label="Quantity"
//                                                     onChange={(e) => handleQuantityChange(data, parseInt(e.target.value))}
//                                                 />
//                                                 <MDBBtn
//                                                     className="px-3 ms-2"
//                                                     onClick={() => handleQuantityChange(data, (itemQuantities[data.id] || 1) + 1)}
//                                                 >
//                                                     <MDBIcon fas icon="plus" />
//                                                 </MDBBtn>
//                                             </div>
//                                             <p className="text-start text-md-center">
//                                                 <strong>KSh {data.price}</strong>
//                                             </p>
//                                         </MDBCol>
//                                     </MDBRow>

//                                     <hr className="my-4" />


//                                 </MDBCardBody>
//                             ))
//                         }
//                     </MDBCard>



//                 </MDBCol>



//             </MDBRow>
//         )}
//     </MDBContainer>
// </section>



















// function CartItem({ item, updateQuantity, removeFromCart }) {
//     const [quantity, setQuantity] = useState(item.quantity);

//     const decreaseQuantity = () => {
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//             updateQuantity(item, -1);
//         }
//     };

//     const increaseQuantity = () => {
//         setQuantity(quantity + 1);
//         updateQuantity(item, 1);
//     };

//     return (
//         <div className="cart-item">
//         <div className="item-image">
//         <img src={item.image} alt={item.title} />
//     </div>
//     <div className="item-details">
//         <h3>{item.title}</h3>
//         <p>Price: ${item.price}</p>
//         <div className="quantity-controls">
//             <button onClick={decreaseQuantity}>-</button>
//             <span>{quantity}</span>
//             <button onClick={increaseQuantity}>+</button>
//         </div>
//         <button onClick={() => removeFromCart(item)}>Remove</button>
//     </div>
//         </div>
//     );
// }
//     <MDBCol md="4">
//     <MDBCard className="mb-4">
//         <MDBCardHeader>
//             <MDBTypography tag="h5" className="mb-0">
//                 Summary
//             </MDBTypography>
//         </MDBCardHeader>

//     </MDBCard>
// </MDBCol>
{/*    <MDBCardBody>
    <MDBListGroup flush>
        <MDBListGroupItem
            className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Products
            <span>Ksh 53.98</span>
        </MDBListGroupItem>
        <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
            Shipping
            <span>Gratis</span>
        </MDBListGroupItem>
        <MDBListGroupItem
            className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
                <strong>Total amount</strong>
                <strong>
                    <p className="mb-0">(including VAT)</p>
                </strong>
            </div>
            <span>
                <strong>KSh 53.98</strong>
            </span>
        </MDBListGroupItem>
    </MDBListGroup>

    <MDBBtn block size="lg">
        Go to checkout
    </MDBBtn>
</MDBCardBody>*/}


