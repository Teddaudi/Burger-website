import { useState } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../../firebaseConfig';
import Notification from '../Notification/Notification';



function SignIn() {
  const auth = getAuth(app);
  const [notifications, setNotifications] = useState([]);

  const showNotification = (message, backgroundColor) => {
      setNotifications([...notifications, { message, backgroundColor }]);
      setTimeout(() => {
          setNotifications(notifications.filter((msg) => msg !== message));
      }, 3000); 
  };
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value }
    setData({ ...data, ...inputs })
  }
  const navigate = useNavigate();
  const handleSubmit = () => {
    showNotification('Succesfully logged in!')
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        const user = res.user.email;
        const accessToken = res.user.accessToken;
        localStorage.setItem('signIn', JSON.stringify(user));
        localStorage.setItem('accessToken', JSON.stringify(accessToken));
      //  alert(res.user.email)
        navigate('/hero', { replace: true })
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <div className="mask d-flex align-items-center h-100  "style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/big-double-cheddar-cheeseburger-with-chicken-cutlet_147620-1306.jpg?size=626&ext=jpg&ga=GA1.2.831985192.1688442252&semt=sph")',
    backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',
   }}>
      <div className="container h-100">
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
            <div className="card mt-5" style={{ 'borderRadius': '15px' }}>
              <div className='card-body p-5'>
                <h1 className=" text-center mb-5">Log In</h1>
                <div>
                  <div className='form-outline mb-4'>

                    <input
                      placeholder='Email'
                      type='email'
                      name='email'
                      className="form-control form-control-lg"
                      onChange={(event) => handleInputs(event)}
                    />
                    <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                  </div>
                  <div className='form-outline mb-4'>

                    <input
                      placeholder='Password'
                      type='password'
                      name='password'
                      className="form-control form-control-lg"
                      onChange={(event) => handleInputs(event)}
                    />
                    <label className="form-label" htmlFor="form3Example4cg">Password</label>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary' type="button" onClick={handleSubmit}>Log In</button>
                  </div>
                  <div className="notification-container">
                  {notifications.map((notification, index) => (
                      <Notification
                          key={index}
                          message={notification.message}
                          backgroundColor={notification.backgroundColor}
                      />
                  ))}
              </div>
                  <p className="text-center text-muted mt-5 mb-0">Don't have an account?<Link to='/'
                    className="fw-bold text-body"> <u>Sign Up Here</u></Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;