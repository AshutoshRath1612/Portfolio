import React, { useState } from "react";
import "./Contact.css";
import ContactImg from "../../assets/images/Contact.jpg";

const Contact = ({ props, ref }) => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const sendMail = () => {
        const {name , email , phone , message} = contactInfo;
        let value = `Name:${name}\nEmail:${email}\nPhone:${phone}\nMessage:${message}`;
        const link = `mailto:ashutoshrath1612@gmail.com?subject=${encodeURIComponent(`Hey I am ${name} trying to reach out to you.`)}&body=${encodeURIComponent(value)}`;
        window.location.href = link;
    };

    return (
        <div ref={ref} className="contactContainer">
            <div className="title">
                <i className="fa-solid fa-envelope" style={{ color: "navy" }}></i>
                <h1 style={{ color: "blue" }}>Contact</h1>
            </div>
            <div className="contact">
                <img src={ContactImg} alt="Contact Img" />
                <div className="contactInfo">
                    <div className="contactBox">
                        <i className="fa-solid fa-user" style={{ color: "black" }}></i>
                        <input onChange={(e)=> setContactInfo({...contactInfo , name : e.target.value})} id="myName" type="text" placeholder="Name" name="name"/>
                    </div>
                    <div className="contactBox">
                        <i className="fa-solid fa-envelope" style={{ color: "black" }}></i>
                        <input onChange={(e)=> setContactInfo({...contactInfo , email : e.target.value})} id="myEmail" type="email" placeholder="Email" name="email"/>
                    </div>
                    <div className="contactBox">
                        <i className="fa-solid fa-phone" style={{ color: "black" }}></i>
                        <input onChange={(e)=> setContactInfo({...contactInfo , phone : e.target.value})} id="myPhone" type="number" placeholder="Phone" name="phone"  />
                    </div>
                    <div  className="contactBox">
                        <i className="fa-solid fa-message" style={{ color: "black" }}></i>
                        <input onChange={(e)=> setContactInfo({...contactInfo , message : e.target.value})} type="text" id="myText" name="message" placeholder="Message"></input>
                    </div>
                <button className="SubmitBtn" onClick={() => sendMail()}>
                    <h2>Submit</h2>
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
                </div>
            </div>

        </div>
    );
};

export default Contact;
