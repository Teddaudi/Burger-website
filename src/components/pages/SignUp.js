import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, Image } from 'react-bootstrap';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';

function SignUp() {
  const [showError, setShowError] = useState(false);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        navigate('/login');
      })
      .catch((error) => {
        setShowError(true);
      });
  };


  return (
    <Container fluid className='p-2'>
      <Row>
        <Col md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <Image src='https://img.freepik.com/premium-photo/big-double-cheddar-cheeseburger-with-chicken-cutlet_147620-1306.jpg?size=626&ext=jpg&ga=GA1.1.831985192.1688442252&semt=sph' alt='burger-signup-image' />
        </Col>
        <Col md='6'>
          <Card className='my-5'>
            <Card.Body className='p-5'>
              <h2 className='mb-2 text-center w-100'>Sign Up</h2>
              <Form.Group className='mb-4'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name='email'
                  type='email'
                  onChange={handleInputs}
                />
              </Form.Group>
              <Popup
                trigger={null}
                open={showError}
                position='top center'
                closeOnDocumentClick
              >
                <Alert variant='danger' style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                  {`${data.email} email account already exists!`}
                </Alert>
              </Popup>
              <Form.Group className='mb-4'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name='password'
                  type='password'
                  onChange={handleInputs}
                />
              </Form.Group>
              <Button className='w-100 mb-4' size='md' onClick={handleSubmit}>
                Sign Up
              </Button>
              <div className='text-center'>
                <p>or sign up with:</p>
                <Button tag='a' style={{ color: 'white' }}>
                  <i className='fab fa-google'></i>
                </Button>
              </div>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                Already have an account?{' '}
                <Link to="/login" style={{ color: '#393f81' }}>
                  Login
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
