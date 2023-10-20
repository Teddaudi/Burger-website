import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebaseConfig';

function Login() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const { email, password } = formData;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("Login", email);
        const user = userCredential.user;
        alert(`Logged in as: ${user.email}`);
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

 return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://img.freepik.com/premium-photo/big-double-cheddar-cheeseburger-with-chicken-cutlet_147620-1306.jpg?size=626&ext=jpg&ga=GA1.1.831985192.1688442252&semt=sph"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Sign into your account
              </h5>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                name="email"
                onChange={handleInputChange}
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                name="password"
                onChange={handleInputChange}
                type="password"
                size="lg"
              />
              <MDBBtn className="mb-4 px-5" color="dark" size="lg" onClick={handleLogin}>
                Login
              </MDBBtn>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                Don't have an account?{' '}
                <Link to="/signup" style={{ color: '#393f81' }}>
                  Register here
                </Link>
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
