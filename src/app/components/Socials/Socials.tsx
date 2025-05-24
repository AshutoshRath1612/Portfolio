import React from "react";
import { connectText,socials } from "../constants/Info";
import GiggleButton from "../GiggleButton/GiggleButton";
import style from './socials.module.css';
interface SocialsProps {
  isHeader: boolean;
}

const Socials: React.FC<SocialsProps> = ({ isHeader }) => {
  return (
    <>
      <div className={style.contactBottomTitle} style={{ fontSize: isHeader ? "1.5rem" : undefined }}>
        {isHeader ? connectText : "Socials"}
      </div>
      <div
        className={isHeader ? style.headerSocialsContainer : style.socialsContainer}
      >
        {socials.map((social, index) => (
          <div className={style.socials} key={index}>
            <GiggleButton
              isIcon={true}
              icon={social.icon}
              onClick={{
                event: "link",
                data: social.link,
              }}
              name="iconButtons"
              text={social.name || ""}
              overlayname=""
              isIconAnimated={false}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Socials;
