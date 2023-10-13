import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, Image } from 'react-bootstrap';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';


function Test2() {
  const [show, setShow] = useState(false);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [notification, setNotification] = useState([]);


  const showNotification = (message, backgroundColor) => {
    setNotification([...notification, { message, backgroundColor }]);
    setTimeout(() => {
      setNotification(notification.filter((msg) => msg !== message));
    }, 3000);
  };
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleInputs = (event) => {
    const inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });

  };
  // const handlePopup = (emailAddress) => {
  //   return (
  //     <Alert variant='danger' style={{ paddingLeft: '10px', paddingRight: '10px' }}>{`${emailAddress} email account already exists!`}</Alert>
  //   )
  // }
  const handleSubmit = () => {
    showNotification('Account created successfully!');
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {

        navigate('/login');
      })
      .catch((error) => {
        setShow(!show);

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
              <Row>
                <h2 className='mb-2 text-center w-100'>Sign Up</h2>
              </Row>
              <Popup
                trigger={
                  <Form.Group className='mb-4'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name='email'
                      type='email'
                      onChange={(event) => handleInputs(event)}
                    />
                  </Form.Group>
                }
                position='top center'
                closeOnDocumentClick
              >
                {
                  show ? <Alert variant='danger' style={{ paddingLeft: '5px', paddingRight: '5px' }}>{`${data.email} email account already exists!`}</Alert> : ''
                }
              </Popup>

              <Form.Group className='mb-4'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name='password'
                  type='password'
                  onChange={(event) => handleInputs(event)}
                />
              </Form.Group>
              <Button className='w-100 mb-4' size='md' onClick={handleSubmit}>
                Sign Up
              </Button>
              <div className='text-center'>
                <p>or sign up with:</p>
                <Button tag='a' className='' style={{ color: 'white' }}>
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

export default Test2;
