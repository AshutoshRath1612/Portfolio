"use client";

import React from "react";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FormData } from "@/app/models/formData.model";
import { Bounce, toast } from "react-toastify";

export const navItems = [
  { icon: faHome, label: "Home", key: "home", event: "navigate", path: "/" },
  {
    icon: faUser,
    label: "About",
    key: "about",
    event: "navigate",
    path: "/about",
  },
  {
    icon: faAddressCard,
    label: "Contact",
    key: "contact",
    event: "scroll",
    path: "/contact",
  },
];

export const checkValidator = (
  e: React.ChangeEvent<HTMLInputElement>,
  validate: boolean
) => {
  if (!validate) return;

  const value = e.target.value;
  const inputType = e.target.type;
  const inputElement = e.target;
  const containerElement: HTMLDivElement | null = inputElement.closest(".contactFormContainer");
  const errorTextElement = containerElement
    ? (containerElement.querySelector(".errorText") as HTMLElement | null)
    : null;
  const errorIconElement = containerElement
    ? (containerElement.querySelector(".errorDot") as HTMLElement | null)
    : null;

  let errorMessage = "";

  // === BASIC VALIDATION RULES ===
  if (value.trim() === "" && inputType !== "tel") {
    errorMessage = `${inputElement.name[0].toUpperCase()}${inputElement.name.slice(1)} is required.`;
  } else if (
    inputType === "email" &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  ) {
    errorMessage = "Please enter a valid email address.";
  } else if (inputType === "tel" && value.trim() !== "") {
    const digitsOnly = value.replace(/\D/g, "");
    if (!/^\+?[0-9\s-]+$/.test(value)) {
      errorMessage = "Please enter a valid phone number.";
    } else if (digitsOnly.length < 10) {
      errorMessage = "Phone number must be at least 10 digits.";
    }
  }
  if (errorMessage !== "")
    toast.error(errorMessage, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });

  // === SET ERROR MESSAGE ===
  if (errorMessage && containerElement) {
    containerElement.style.backgroundColor = "#de4040";
    if (errorTextElement) {
      errorTextElement.textContent = errorMessage;
      errorTextElement.style.color = "red";
    }
    if (errorIconElement) {
      errorIconElement.style.display = "block";
    }
  } else {
    if (containerElement) {
      containerElement.style.backgroundColor = "";
    }
    if (errorTextElement) {
      errorTextElement.textContent = "";
    }
    if (errorIconElement) {
      errorIconElement.style.display = "none";
    }
  }
};

const validateFormData = (formData: FormData) => {
  const { name, email, message } = formData;

  if (!name || !email || !message) {
    return false;
  }

  return true;
}


export const sendFormData = async (formData: FormData): Promise<boolean> => {
  if (!validateFormData(formData)) {
    toast.error("Form data is invalid. Please check the fields.", {
      position: "top-center",
      autoClose: 5000,
      theme: "light",
      transition: Bounce,
    });
    return false;
  }

  try {
    const result = await toast.promise(
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then(async (response) => {
          const data = await response.json();
          if (!response.ok || !data.success) {
            throw new Error(data.error || "Something went wrong");
          }
          return data;
        }),
      {
        pending: "Sending your message...",
        success: "Message sent successfully!",
        error: "Failed to send message. Try again later.",
      },
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      }
    );

    return result.success;
  } catch (error) {
    console.log(error)
    return false;
  }
};