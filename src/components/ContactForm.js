import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import Footers from './Footers';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className=''>
           <div className='pt-10'>
           <form id='form' className='text-center container mt-5 mb-0 ' style={{ width: '100%', maxWidth: '300px' }}>
           <h2>Contact Us</h2>

           <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

           <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

           <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

           <MDBTextArea wrapperClass='mb-4' label='Message' />

           <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

           <MDBBtn color='primary' block className='my-4'>
               Send
           </MDBBtn>
       </form>
           </div>
            <Footers/>
        </div>
    )
}

export default ContactForm;