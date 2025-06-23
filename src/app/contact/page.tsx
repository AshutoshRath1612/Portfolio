"use client";
import React, { useEffect, useRef, useState } from "react";
import Avatar from "../assets/Avatar.png";
import style from "./contact.module.css";
import { contactFormQuestions, email, phone } from "../components/constants/Info";
import { checkValidator, sendFormData } from "../components/constants/Functions";
import GiggleButton from "../components/GiggleButton/GiggleButton";
import Socials from "../components/Socials/Socials";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons/faDotCircle";
import { animate, stagger } from "animejs";
import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    services: "",
    message: "",
  });
  const contactContainerRef = useRef<HTMLDivElement | null>(null);
  const contactDetailContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const contactFormFieldRef = contactContainerRef.current?.querySelectorAll(
      ".contactFormContainer"
    );
    const contactDetails =
      contactDetailContainerRef.current?.querySelectorAll("div");
    if (contactDetails) {
      animate(contactDetails, {
        translateX: ["100vw", "0px"],
        opacity: [0, 1],
        duration: 600,
        delay: stagger(50),
        ease: "inOut(4)",
      });
    }
    if (contactFormFieldRef) {
      animate(Array.from(contactFormFieldRef), {
        translateX: ["-100vw", "0px"],
        opacity: [0, 1],
        duration: 1200,
        delay: stagger(100),
        ease: "inOut(4)",
      });
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  return (
    <>
    <ToastContainer />
    <motion.div
  className={style.contactPageWrapper}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
      <div className={style.contactContainer}>
        <Navbar />
        <div className={style.contactHeaderContainer}>
          <motion.h1 
            className={style.contactTitle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let&apos;s start a project together
          </motion.h1>
          <motion.div
            className={style.avatarWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Image
              src={Avatar}
              alt="Profile Avatar"
              className={style.contactAvatar}
              width={150}
              height={150}
            />
          </motion.div>
        </div>
        
        <div className={style.contactContentContainer}>
          <div className={style.formContainer} ref={contactContainerRef}>
            {contactFormQuestions.map((question, index) => (
              <div
                className={`${style.contactFormContainer} contactFormContainer`}
                key={index}
              >
                <div className={style.contactFormTopContainer}>
                  <div className={style.serialContainer}>{`0${index + 1}`}</div>
                  <div className={style.questions}>{question.question}</div>
                </div>
                <div className={style.contactFormInputContainer}>
                  <input
                    type={question.type}
                    name={question.name}
                    placeholder={question.placeholder}
                    className={style.contactInput}
                    onBlur={(e) => checkValidator(e, question.validate)}
                    onChange={(e) =>handleChange(e, question.name)}
                  />
                </div>
                {/* <div className={style.contactFormBottomContainer}>
                  <div className={`${style.errorDot} errorDot`}>
                    <FontAwesomeIcon icon={faDotCircle} />
                  </div>
                  <div className={`${style.errorText} errorText`}></div>
                </div> */}
              </div>
            ))}
          </div>
          
          <div className={style.contactDetailsWrapper}>
            <motion.div
              className={style.contactDetailsContainer}
              ref={contactDetailContainerRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className={style.contactDetailsButtonContainer}>
                <h3 className={style.contactDetailsHeading}>Contact Details</h3>
                <GiggleButton
                  text={phone}
                  name="contactDetails"
                  name2=""
                  overlayname="contactOverlay"
                  isIcon={false}
                  isIconAnimated={false}
                  onClick={{ event: "none", data: null }}
                />
                <GiggleButton
                  text={email}
                  name="contactDetails"
                  name2=""
                  overlayname="contactOverlay"
                  isIcon={false}
                  isIconAnimated={false}
                  onClick={{ event: "none", data: null }}
                />
              </div>
              <div className={style.contactsSocialsContainer}>
                <Socials isHeader={false} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <GiggleButton
                text="Send it!"
                name="sendButton"
                name2=""
                overlayname="sendOverlay"
                isIcon={false}
                  isIconAnimated={false}
                onClick={{ event: "function", data: {name: sendFormData , data: formData} }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Contacts;