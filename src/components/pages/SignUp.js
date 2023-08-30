import { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../../firebaseConfig';


function SignUp({onAuthentication}) {
  const auth = getAuth(app)
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
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        const user = res.user.email;
        const accessToken = res.user.accessToken;
        localStorage.setItem('signUp', JSON.stringify(user));
        localStorage.setItem('accessToken', JSON.stringify(accessToken));
        // onAuthentication(true)
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
  { /* */}        <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                  </div>
                  <div className='form-outline mb-4'>

                    <input
                      placeholder='Password'
                      type='password'
                      name='password'
                      className="form-control form-control-lg"
                      onChange={(event) => handleInputs(event)}
                    />
  {/**/}          <label className="form-label" htmlFor="form3Example4cg">Password</label>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-success btn-block btn-lg gradient-custom-1 text-body' type="button" onClick={handleSubmit}>Sign Up</button>
                  </div>
                  <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to='/signin'
                  className="fw-bold text-body"><u>Login here</u></Link></p>
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
























// import React from 'react';
// import './SignUp.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { app } from '../../firebaseConfig';
// import {doc, getFirestore, setDoc} from 'firebase/firestore'
// import {FcGoogle} from 'react-icons/fc'
// import { Button, Flex, HStack, Image } from "@chakra-ui/react";
// import Burger from '../../img/burgerBackground.jpg'
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const firebaseAuth = getAuth(app)
//   const provider = new GoogleAuthProvider();
//   const firebaseDb = getFirestore(app);
//   const navigate = useNavigate()
  
//   const login = async()=>{
//     const {user} = await signInWithPopup(firebaseAuth,provider);
//     const {refreshToken,providerData} = user;
//     localStorage.setItem('user',JSON.stringify(providerData));
//     localStorage.setItem("accessToken",JSON.stringify(refreshToken))

//     await setDoc(
//       doc(firebaseDb,'users',providerData[0].uid),
//       providerData[0]
//     )
//     navigate("/", { replace: true });
//   }
//   return (
//      <>
//      <Flex
//      justifyContent={"center"}
//      alignItems={"center"}
//      width={"100vw"}
//      height={"100vh"}
//      position={"relative"}
//      >
//      <Image src={Burger} objectFit="cover" width={"100vw"} height={"100vh"} />
//      <Flex
//        position={"absolute"}
//        width={"100vw"}
//        height={"100vh"}
//        bg={"blackAlpha.600"}
//        top={0}
//        left={0}
//        justifyContent="center"
//        alignItems={"center"}
//      >
//        <HStack>
//          <Button
//            leftIcon={<FcGoogle fontSize={25} />}
//            colorScheme="whiteAlpha"
//            shadow={"lg"}
//            onClick={login}
//            color="#f1f1f1" 
//            >
//            Signin with Google
//            </Button>
//            </HStack>
//      </Flex>
//    </Flex>
//      </>
//     );
//   }
  
//   export default SignUp;




















  // const [data, setData] = useState({
  //   email: '',
  //   password: ''
  // });

  // const handleInputs = (event) => {
  //   let inputs = { [event.target.name]: event.target.value };
  //   setData({ ...data, ...inputs });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(data)
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth,data.email,data.password)
  //   .then((res)=>{
  //     console.log(res.user)
  //   })
  //   .catch((error)=>{
  //     console.log(error.message)
  //   })
  // };
    // const [data, setData] = useState({
  //   email: '',
  //   password: ''
  // })

  // const handleInputs = (event) => {
  //   let inputs = { [event.target.name]: event.target.value }
  //   setData({ ...data, ...inputs })
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, data.email, data.password)
  //     .then((userCredential) => {
      
  //       const user = userCredential.user;
  //       console.log(user)
  //     })
  //     .catch((error) => {
  //       console.log(error.message)
  //       // ..
  //     });
  // }
  // <div className="container">
  //   <input
  //     placeholder='Email'
  //     type='email'
  //     name='email'
  //     // value={data.email}
  //     className="form-control mt-3"
  //     onChange={(event) => handleInputs(event)}
  //   />
  //   <input
  //     placeholder='Password'
  //     type='password'
  //     name='password'
  //     // value={data.password}
  //     className="form-control mb-3 mt-3"
  //     onChange={(event) => handleInputs(event)}
  //   />
  //   <button onClick={handleSubmit} className="btn btn-primary">Sign Up</button>
  // </div>