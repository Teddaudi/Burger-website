import React, { useState } from "react";
import './Popup.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Popups = () => {
    const email = 'daudited@gmail.com';
    const[show,setShow]=useState=(false)
    const handleInputs = (event) => {
        console.log(event)
    }
    const handleSubmit = () => {
        console.log('Submitted!')
    }

    return (
        <div className="container">
            <div className="form-group">
                <Popup
                    trigger={open => (
                        <input className="button form-control mb-3 w-100" placeholder={`Trigger - ${open ? 'Opened' : 'Closed'}`} />
                    )}
                    position="top center"
                    closeOnDocumentClick
                >
                    <span className="w-100 text-danger">{`${email} email account already exists!`} </span>

                </Popup>
                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={(event) => handleInputs(event)}
                />
                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
            </div>
            <div className="form-group">
                <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={(event) => handleInputs(event)}
                />
                <label className="form-label" htmlFor="form3Example4cg">Password</label>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" type="button" onClick={handleSubmit}>Log In</button>
            </div>
        </div>
    )
};
export default Popups;