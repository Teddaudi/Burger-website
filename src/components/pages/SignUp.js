import React from 'react';
import './SignUp.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../../firebaseConfig';
import {doc, getFirestore, setDoc} from 'firebase/firestore'
import {FcGoogle} from 'react-icons/fc'
import { Button, Flex, HStack, Image } from "@chakra-ui/react";
import Burger from '../../img/burgerBackground.jpg'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider();
  const firebaseDb = getFirestore(app);
  const navigate = useNavigate()
  const login = async()=>{
    const {user} = await signInWithPopup(firebaseAuth,provider);
    const {refreshToken,providerData} = user;
    localStorage.setItem('user',JSON.stringify(providerData));
    localStorage.setItem("accessToken",JSON.stringify(refreshToken))

    await setDoc(
      doc(firebaseDb,'users',providerData[0].uid),
      providerData[0]
    )
    navigate("/", { replace: true });
  }
  return (
      <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      position={"relative"}
      >
      <Image src={Burger} objectFit="cover" width={"100vw"} height={"100vh"} />
      <Flex
        position={"absolute"}
        width={"100vw"}
        height={"100vh"}
        bg={"blackAlpha.600"}
        top={0}
        left={0}
        justifyContent="center"
        alignItems={"center"}
      >
        <HStack>
          <Button
            leftIcon={<FcGoogle fontSize={25} />}
            colorScheme="whiteAlpha"
            shadow={"lg"}
            onClick={login}
            color="#f1f1f1" 
            >
            Signin with Google
            </Button>
            </HStack>
      </Flex>
    </Flex>
    );
  }
  
  export default SignUp;
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