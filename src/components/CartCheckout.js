import React, { useState, useEffect } from "react";
import './CartCheckout.css';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { FcSimCard } from "react-icons/fc";
import { ImBin } from 'react-icons/im';

export default function CartCheckout({ cartItems, removeFromCart }) {
  const [cart, setCart] = useState(cartItems)
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);
  const shippingCost = 1;
  const total = shippingCost + cartTotal;
  const [name, setName] = useState('');
  const [orders, setOrders] = useState(cartItems);
  const [msisdn, setMsisdn] = useState('');
  const [accountNo, setAccountNo] = useState('200');
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = 'https://tinypesa.com/api/v1/express/initialize';
    const requestBody = new URLSearchParams({
      amount: total,
      msisdn: msisdn,
      account_no: accountNo,
    });

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          Apikey: 'CERkYjSdqXj',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: requestBody,
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
    } catch (error) {
      console.error('API request error:', error);
    }
  };

  const handleOrders = (e) => {
    e.preventDefault();
    console.log(name, msisdn, orders);
    try {
      fetch('http://localhost:3000/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, msisdn, orders }),
      })
        .then((response) => {
          if (response.status === 201) {
            return response.json();
          } else {
            throw new Error('Error response');
          }
        })
        .then((result) => {
          alert(result.message);
          setName('');
          setMsisdn('');
          setOrders([]);
        })
        .catch((error) => {
          console.error(error);
          alert('Internal Server Error');
        });
    } catch (error) {
      console.error(error);
      alert('Internal Server Error');
    }
  };
  const deleteItem = (itemId) => {

    console.log( cart);
    const updatedCart = cart.filter((item) => item._id !== itemId);
    setCart(updatedCart);
    
  }

  return (
    <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBTypography tag="h4">
                <Link to="/menu" className="text-body">
                  <MDBIcon fas icon="long-arrow-alt-left me-2 mb-4" /> Continue shopping
                </Link>
              </MDBTypography>
              <MDBTable responsive>
                <MDBTableHead>
                  <tr>
                    <th scope="col" className="h5">
                      Shopping Cart
                    </th>
                    <th scope="col">Items</th>
                    <th scope="col"></th>
                    <th scope="col">Price</th>
                  </tr>
                </MDBTableHead>
                {cart.map((data) => (
                  <MDBTableBody key={data._id}>
                    <tr id="data-id">
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <img
                            src={data.image}
                            className="img-fluid rounded-3"
                            style={{ width: "120px" }}
                            alt="Book"
                          />
                        </div>
                      </th>
                      <td className="align-middle">
                        <p className="mb-0" style={{ fontWeight: "500" }}>
                          {data.title}
                        </p>
                        <p className="mb-0" style={{ fontWeight: "500" }}>
                          {data._id}
                        </p>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex flex-row align-items-center">
                          <MDBBtn className="px-2" color="link">
                            <ImBin color="#dc3545" onClick={() => deleteItem(data._id)} />
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
                ))}
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
                          minLength={10}
                          maxLength={10}
                          value={msisdn}
                          onChange={(e) => { setMsisdn(e.target.value) }}
                        />
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol lg="4" xl="3">
                    <div className="d-flex justify-content-between" style={{ fontWeight: "500" }}>
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">Ksh {cartTotal}</p>
                    </div>
                    <div className="d-flex justify-content-between" style={{ fontWeight: "500" }}>
                      <p className="mb-0">Shipping</p>
                      <p className="mb-0">Ksh {shippingCost}</p>
                    </div>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-4" style={{ fontWeight: "500" }}>
                      <p className="mb-2">Total</p>
                      <p className="mb-2">Ksh {total}</p>
                    </div>
                    <MDBBtn block size="lg" onClick={(e) => handleSubmit(e)}>
                      <div className="d-flex justify-content-between">
                        <span>Checkout</span>
                        <span>Ksh {total}</span>
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
