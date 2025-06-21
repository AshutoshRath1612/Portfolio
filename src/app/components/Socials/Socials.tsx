import React from "react";
import { connectText, socials } from "../constants/Info";
import GiggleButton from "../GiggleButton/GiggleButton";
import styles from "./socials.module.css";
import { SocialsProps } from "@/app/models/social.model";
import { motion } from "framer-motion";

const Socials: React.FC<SocialsProps> = ({ isHeader, isHomePage }) => {
  return (
    <div className={!isHomePage ? styles.socialsWrapper : ""}>
      <motion.h3
        className={styles.contactTitle}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ color: isHeader ? "#fff" : "#000" }}
      >
        {isHomePage ? "" : isHeader ? connectText : "Connect With Me"}
      </motion.h3>

      <div
        className={
          isHomePage? styles.homeSocialContainer : isHeader ? styles.headerSocialsContainer : styles.socialsContainer
        }
      >
        {socials.map((social, index) => (
          <motion.div
            key={index}
            className={styles.socialItem}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <GiggleButton
              isIcon={true}
              icon={social.icon}
              onClick={{
                event: "link",
                data: social.link,
              }}
              name="iconButtons"
              name2={isHomePage ? "homeSocials" : ""}
              text={social.name || ""}
              overlayname="socialOverlay"
              isIconAnimated={true}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
