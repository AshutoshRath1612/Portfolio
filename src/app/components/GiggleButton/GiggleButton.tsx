"use client";
import { animate } from "animejs";
import React, { useEffect, useRef } from "react";
import style from "./gigglebutton.module.css";
import {
  FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { GiggleButtonProps } from "@/app/models/gigglebutton.model";

const GiggleButton = ({
  text,
  name,
  name2,
  overlayname,
  isIcon,
  icon,
  onClick,
  isIconAnimated,
}: GiggleButtonProps) => {
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (isIconAnimated && iconRef.current) {
      animate(iconRef.current, {
        scale: [1, 1.3, 1],
        duration: 500,
        ease: "easeInOutQuart",
      });
    }
  }, [icon, isIconAnimated]);

  const overlayRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    if (!overlayRef.current || !buttonRef.current) return;

    animate(overlayRef.current, {
      translateY: ["100%", "0%"],
      opacity: [0, 1],
      duration: 500,
      ease: "inOut(4)",
    });

    animate(buttonRef.current, {
      scale: [1, 1.1],
      duration: 500,
      direction: "alternate",
      ease: "easeOutElastic(1, .5)",
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const textElem = buttonRef.current.querySelector(`.${style.giggleButtonText}`);
    const iconElem = iconRef.current;
    const bounds = buttonRef.current.getBoundingClientRect();
    const offsetX = e.clientX - bounds.left - bounds.width / 2;
    const offsetY = e.clientY - bounds.top - bounds.height / 2;

    const targetElem = textElem || iconElem;
    if (targetElem) {
      animate(targetElem, {
        translateX: name === "contactDetails" ? offsetX * 0.1 : offsetX * 0.2,
        translateY: offsetY * 0.2,
        duration: 200,
        ease: "easeOutQuad",
      });
    }

    animate(buttonRef.current, {
      translateX: name === "contactDetails" ? offsetX * 0.05 : offsetX * 0.1,
      translateY: offsetY * 0.1,
      duration: 200,
      ease: "easeOutQuad",
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    const overlay = buttonRef.current.querySelector(`.${style.buttonOverlay}`);

    if (overlay) {
      animate(overlay, {
        translateY: ["0%", "-100%"],
        opacity: [1, 0],
        duration: 300,
        ease: "easeInCubic",
      });
    }

    const giggleButtonTextElem = buttonRef.current.querySelector(
      `.${style.giggleButtonText}`
    );
    const targetElem = giggleButtonTextElem || iconRef.current;
    if (targetElem) {
      animate(targetElem, {
        translateX: 0,
        translateY: 0,
        duration: 300,
        ease: "easeOutExpo",
      });
    }

    animate(buttonRef.current, {
      scale: 1,
      translateX: 0,
      translateY: 0,
      duration: 300,
      ease: "easeOutElastic(1, .6)",
    });
  };

  const runEventHandler = async() => {
    if (onClick.event === "toggle") {
      // onClick.data.setState(() => !onClick.data.state);
      // // onClick.data.setState(toggle)
      // setToggle(!toggle);
    } else if (
      onClick.event === "link" &&
      (typeof onClick.data === "string" || onClick.data instanceof URL)
    ) {
      window.open(onClick.data.toString(), "_blank");
    } else if (
      onClick.event === "navigate" &&
      typeof onClick.data === "string"
    ) {
      router.push(onClick.data);
    }
    else if (onClick.event === "function") {
      const functionData = onClick.data as { name: (data: unknown) => boolean; data: unknown };
      if (Array.isArray(functionData.data)) {
        const result = await functionData.name(functionData.data[0]);
        if(result) {
          functionData.data[1]({
              name: "",
              email: "",
              organization: "",
              services: "",
              message: "",
            })
        };
      }
    } 
  };

  return (
    <button
      className={`${style.giggleButton} ${style[name]} ${style[name2]}`}
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={runEventHandler}
      type="button"
    >
      {isIcon && icon ? (
        <FontAwesomeIcon
          ref={isIconAnimated ? iconRef : null}
          icon={icon}
          style={{ zIndex: 1 }}
        />
      ) : (
        <div className={style.giggleButtonText}>{text}</div>
      )}
      <span
        ref={overlayRef}
        className={`${style.buttonOverlay} ${style[overlayname]}`}
      ></span>
    </button>
  );
};

export default GiggleButton;
