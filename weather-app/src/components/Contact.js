import React, { Component } from "react";
import pic1 from "../image/profile_pic1.jpg";
import pic2 from "../image/profile_pic2.jpeg";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact_row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="mx-auto contact_card">
              <div className="card-img">
                <img
                  src={pic1}
                  id="image1"
                  className="img-fluid"
                  alt="profilepicture"
                />
              </div>
              <div className="contact-card-body">
                <h5 className="contact-card-title">Harsha Ramayanam</h5>
                <p className="contact-card-text">Computer Science Graduate Student</p>
                <div className="row contact-row_div">
                  <div className="col contact_col">
                    <p>
                      <a href="https://github.com/HarshaRamayanam/webdev-project">
                        <b>Github</b>
                      </a>
                    </p>
                  </div>
                  <div className="col contact_col">
                    <p>
                      <a href="www.linkedin.com/in/harsharamayanam">
                        <b>linkedin</b>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="mx-auto contact_card">
              <div className="card-img">
                <img
                  src={pic2}
                  id="image1"
                  className="img-fluid"
                  alt="j profilepicture"
                />
              </div>
              <div className="contact-card-body">
                <h4 className="contact-card-title1">Shweta Korulkar</h4>
                <p className="contact-card-text">Computer Science Graduate Student</p>
                <div className="row contact-row_div">
                  <div className="col contact-col">
                    <p>
                      <a href="https://github.com/HarshaRamayanam/webdev-project">
                        <b>Github</b>
                      </a>
                    </p>
                  </div>
                  <div className="col contact-col">
                    <p>
                      <a href="https://www.linkedin.com/in/shweta-korulkar-9aa690119/">
                        <b>linkedin</b>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
