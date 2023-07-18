import React from "react";
import './Menu.css';


const Menu = () => {
  return (
    <div className="food mt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="food-item">
              <i className="flaticon-burger"></i>
              <h2>Burgers</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit
                facilis ornare velit non vulputa. Aliquam metus tortor auctor
                quis sem.
              </p>
              <a href="">View Menu</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="food-item">
              <i className="flaticon-snack"></i>
              <h2>Snacks</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit
                facilis ornare velit non vulputa. Aliquam metus tortor auctor
                quis sem.
              </p>
              <a href="">View Menu</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="food-item">
              <i className="flaticon-cocktail"></i>
              <h2>Beverages</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit
                facilis ornare velit non vulputa. Aliquam metus tortor auctor
                quis sem.
              </p>
              <a href="">View Menu</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
