import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom/dist';
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';

const SignUpForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  function onChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }
  function onSubmit(e) {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate('/')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="container ">
      <h2 className="mt-4">Sign Up</h2>
      <form onSubmit={onSubmit}>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            className="form-control"
            required
            placeholder='Email address'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            className="form-control"
            required
            placeholder='Password'
          />
        </div>
        <button type="submit"
          className="btn btn-primary"
          onClick={onSubmit}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
