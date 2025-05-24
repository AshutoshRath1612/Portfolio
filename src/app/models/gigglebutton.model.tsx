import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface GiggleButtonProps {
  text: string;
  name: string;
  overlayname: string;
  isIcon: boolean;
  icon?: FontAwesomeIconProps["icon"];
  onClick: {
    event: "toggle" | "link" | "navigate" | "none";
    data: unknown;
  };
  isIconAnimated: boolean;
}
