import { useState } from 'react';
// import './App.css';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const auth = getAuth()
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value }
    setData({ ...data, ...inputs })
  }
  const navigate = useNavigate();
  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        const user = res.user.email;
        const accessToken = res.user.accessToken;
        console.log(user, accessToken)
        localStorage.setItem('signUp', JSON.stringify(user));
        localStorage.setItem('accessToken', JSON.stringify(accessToken));
        alert(res.user.email)
        navigate('/signin', { replace: true })
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  return (
    <div className="mask d-flex align-items-center h-100 ">
      <div className="container h-100">
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
            <div className="card mt-5" style={{ 'borderRadius': '15px' }}>
              <div className='card-body p-5'>
                <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                <div>
                  <div className='form-outline mb-4'>

                    <input
                      placeholder='Email'
                      type='email'
                      name='email'
                      className="form-control form-control-lg"
                      onChange={(event) => handleInputs(event)}
                    />
                    <label className="form-label" for="form3Example3cg">Your Email</label>
                  </div>
                  <div className='form-outline mb-4'>

                    <input
                      placeholder='Password'
                      type='password'
                      name='password'
                      className="form-control form-control-lg"
                      onChange={(event) => handleInputs(event)}
                    />
                    <label className="form-label" for="form3Example4cg">Password</label>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-success btn-block btn-lg gradient-custom-1 text-body' type="button" onClick={handleSubmit}>Sign Up</button>
                  </div>
                  <p class="text-center text-muted mt-5 mb-0">Have already an account? <Link to='/signin'
                    class="fw-bold text-body"><u>Login here</u></Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;