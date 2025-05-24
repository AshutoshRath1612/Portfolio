"use client";
import React, { useEffect, useRef } from "react";
import Avatar from "../assets/Avatar.png";
import style from "./contact.module.css";
import {
  contactFormQuestions,
  email,
  phone,
} from "../components/constants/Info";
import { checkValidator } from "../components/constants/Functions";
import GiggleButton from "../components/GiggleButton/GiggleButton";
import Socials from "../components/Socials/Socials";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons/faDotCircle";
import { animate, stagger } from "animejs";
import Navbar from "../components/Navbar/Navbar";

const Contacts = () => {
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
      animate(contactFormFieldRef, {
        translateX: ["-100vw", "0px"],
        opacity: [0, 1],
        duration: 1200,
        delay: stagger(100),
        ease: "inOut(4)",
      });
    }
  }, []);
  return (
    <>
      <div className={style.contactContainer}>
        <Navbar />
        <div className={style.contactHeaderContainer}>
          <div style={{ fontSize: "2.5rem" }}>
            Let&apos;s start a project together
          </div>
          <Image
            src={Avatar}
            alt=""
            className={style.contactAvatar}
            style={{ width: "15%" }}
          />
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
                    placeholder={question.placeholder}
                    className={style.contactInput}
                    onBlur={(e) => checkValidator(e, question.validate)}
                  />
                </div>
                <div className={style.contactFormBottomContainer}>
                  <div className={`${style.errorDot} errorDot`}>
                    <FontAwesomeIcon icon={faDotCircle} />
                  </div>
                  <div className={`${style.errorText} errorText`}></div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              width: "30%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              className={style.contactDetailsContainer}
              ref={contactDetailContainerRef}
            >
              <div className={style.contactDetailsButtonContainer}>
                <div className={style.contactDetailsHeading}>
                  Contact Details
                </div>
                <div className="">
                  <GiggleButton
                    text={phone}
                    name="contactDetails"
                    overlayname={"contactOverlay"}
                    isIcon={false}
                    icon={undefined}
                    isIconAnimated={false}
                    onClick={{
                      event: "none",
                      data: null,
                    }}
                  />
                </div>
                <div className="">
                  <GiggleButton
                    text={email}
                    name="contactDetails"
                    overlayname={"contactOverlay"}
                    isIcon={false}
                    icon={undefined}
                    isIconAnimated={false}
                    onClick={{
                      event: "none",
                      data: null,
                    }}
                  />
                </div>
              </div>
              <div className={style.contactsSocialsContainer}>
                <Socials isHeader={false} />
              </div>
            </div>
            <div>
              <GiggleButton
                text={"Send it!"}
                name="sendButton"
                overlayname=""
                isIcon={false}
                icon={undefined}
                isIconAnimated={false}
                onClick={{
                  event: "none",
                  data: null,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
