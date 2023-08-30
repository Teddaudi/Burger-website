import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Route, Routes, useNavigate } from 'react-router-dom'
import SignUp from './SignUp'
import App from '../../App'
import { fetchUser, userAccessToken } from '../util/fetchUser'

const Navigation = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const accessToken = userAccessToken();
      if (!accessToken) {
        navigate("/signup", { replace: true });
      } else {
        const [userInfo] = fetchUser();
        setUser(userInfo);
        navigate("/",{replace:true})
      }
    }, []);
  return (
   <Routes>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='/*' element={<App user={user}/>}/>
   </Routes>
  )
}

export default Navigation