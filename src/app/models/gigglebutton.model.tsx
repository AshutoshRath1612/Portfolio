import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface GiggleButtonProps {
  text: string;
  name: string;
  name2:string;
  overlayname: string;
  isIcon: boolean;
  icon?: FontAwesomeIconProps["icon"];
  onClick: {
    event: "toggle" | "link" | "navigate" | "function" | "none";
    data: { name: (data: unknown) => void; data: unknown } | unknown | string | URL | null;
  };
  isIconAnimated: boolean;
}
