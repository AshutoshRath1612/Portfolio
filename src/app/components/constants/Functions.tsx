"use client"

import React from "react";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

export const navItems = [
    { icon: faHome, label: "Home", key: "home", event: "navigate",path: "/" },
    { icon: faUser, label: "About", key: "about", event: "navigate",path: "/about", },
    { icon: faAddressCard, label: "Contact", key: "contact", event: "scroll",path: "/contact" },
  ];
  export const copyrightText = [
    "©", " ", "A", "s", "h", "u", "t", "o", "s", "h", " ", "R", "a", "t", "h",
  ];

  export const getRandomColour = () => {
    const letters = "CDEF89";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };


 export const checkValidator = (e:React.ChangeEvent<HTMLInputElement>, validate:boolean ) => {
  if(!validate) return;
  const value = e.target.value;
  const inputType = e.target.type;
  const inputElement = e.target;

  // Get the nearest .error-text element
  const containerElement = inputElement.closest(".contactFormContainer");
  const errorTextElement = containerElement
    ? (containerElement.querySelector(".errorText") as HTMLElement | null)
    : null;
  const errorIconElement = containerElement
    ? (containerElement.querySelector(".errorDot") as HTMLElement | null)
    : null;
    
  let errorMessage = "";

  // === BASIC VALIDATION RULES ===
  if (value.trim() === "") {
    errorMessage = "This field is required.";
  } else if (
    inputType === "email" &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  ) {
    errorMessage = "Please enter a valid email address.";
  }

  // === SET ERROR MESSAGE ===
  if (errorMessage) {
    if (errorTextElement) {
      errorTextElement.textContent = errorMessage;
      errorTextElement.style.color = "red";
    }
    if (errorIconElement) {
      errorIconElement.style.display = "block";
    }
  } else {
    if (errorTextElement) {
      errorTextElement.textContent = "";
    }
    if (errorIconElement) {
      errorIconElement.style.display = "none";
    }
  }
};
