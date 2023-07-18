import React from "react";
import {BsInstagram,BsFacebook,BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className="container:sm ">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <div className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <BsFacebook/>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <BsTwitter/>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <BsInstagram/>
            </a>



          </div>
        </div>

        <div
          className="text-center p-3"
          style={{backgroundColor:' rgba(0, 0, 0, 0.2)'}}
        >
          © 2023 Copyright:
          <a className="text-white " href="daudited@gmail.com">
            daudited@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
