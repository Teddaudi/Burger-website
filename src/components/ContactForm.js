import React, { useEffect, useState } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import Footers from './Footers';
import './ContactForm.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ContactForm = ( ) => {
 
  return (
    <div className='mb-0 pb-0'>
      <div className='pt-10 form'>
        <form id='form' className='text-center container mt-5 mb-0' style={{ width: '100%', maxWidth: '400px', height: '100%' }}>
          <Link to="/menu">
            <AiOutlineArrowLeft
              color='black'
              fontSize='2.5em'
              onMouseOver={({ target }) => (target.style.color = 'orange')}
              onMouseOut={({ target }) => (target.style.color = 'black')}
              className='d-flex '
              id='leftArrow'
            />
          </Link>
          <h2>Contact Us</h2>

          <MDBInput label='Name' wrapperClass='mb-4' />

          <MDBInput type='email' label='Email address' wrapperClass='mb-4' />

          <MDBInput label='Subject' wrapperClass='mb-4' />

          <MDBTextArea wrapperClass='mb-4' label='Message' />

          <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me a copy' />

          <MDBBtn color='primary' block className='my-4'>
            Send
          </MDBBtn>
        </form>
      </div>
      <Footers />
    </div>
  );
};

export default ContactForm;
