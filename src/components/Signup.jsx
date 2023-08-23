import { useState } from 'react';
// import './App.css';
import {
  getAuth,
  createUserWithEmailAndPassword
} from 'firebase/auth'

function App() {
  const [data,setData]= useState({
    email:'',
    password:''
  })
  const auth = getAuth()
  const handleInputs=(event)=>{
    let inputs ={[event.target.name]:event.target.value}
    setData({...data,...inputs})
  }
  const handleSubmit=()=>{
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((res)=>{
      console.log(res.user)
    })
    .catch((err)=>{
      alert(err.message)
    })
  }
  return (
    <div className="App-header">
      <input
      placeholder='Email'
      type='email'
      name='email'
      className="input-fields"
      onChange={(event)=>handleInputs(event)}
      />
         <input
      placeholder='Password'
      type='password'
      name='password'
      className="input-fields"
      onChange={(event)=>handleInputs(event)}
      />
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom/dist';
// import {
//   getAuth,
//   createUserWithEmailAndPassword
// } from 'firebase/auth';


// const SignUpForm = () => {
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const auth = getAuth();
//   function onChange(e) {
//     let inputs = { [e.target.id]: e.target.value }
//     setFormData((prev) => ({
//       ...prev,
//       ...inputs
//     }))
//   }

//   function onSubmit(e) {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, formData.email, formData.password)
//       .then((res) => {
//         console.log(res.user)
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//   }

//   return (
//     <div className="container ">
//       <h2 className="mt-4">Sign Up</h2>
//       <form onSubmit={onSubmit}>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
    
//             onChange={(e) => onChange(e)}
//             className="form-control"
//             required
//             placeholder='Email address'
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             onChange={(e) => onChange(e)}
//             className="form-control"
//             required
//             placeholder='Password'
//           />
//         </div>
//         <button type="submit"
//           className="btn btn-primary"
//           onClick={onSubmit}
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;
