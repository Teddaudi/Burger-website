import React, { useState } from 'react'
import './ProductCard.css'
import {
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBBtn,
} from 'mdb-react-ui-kit';
const Notification = ({ details }) => {
    const [showModal, setShowModal] = useState(false);
    const [cart, setCart] = useState([])
    const toggleModal = () => {
        setShowModal(!showModal);
    };


    return (
        <MDBContainer>
            <MDBModal show={showModal} onHide={() => setShowModal(false)}>
                <MDBModalHeader>
                    Product Details
                </MDBModalHeader>
                <MDBModalBody>
                    <div>
                        <img src={details?.image} alt={details?.title} />
                        <h5>{details?.title}</h5>
                        <p>Price: Ksh {details?.price}</p>
                    </div>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
};

export default Notification