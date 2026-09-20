import { buildMailTo, cn } from "@/app/lib/utils";
import { Social } from "@/app/schemas/common.schema";
import { Mail } from "lucide-react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

interface SocialLinksProps {
  social: Social;
  emailSubject?: string;
  emailBody?: string;
  className?: string;
}

const SocialLinks = ({
  social,
  emailSubject,
  emailBody,
  className,
}: SocialLinksProps) => {
  const links = [
    social.github && {
      label: "Github",
      href: social.github,
      Icon: FaGithub,
      external: true,
    },
    social.linkedin && {
      label: "LinkedIn",
      href: social.linkedin,
      Icon: FaLinkedin,
      external: true,
    },
    social.email && {
      label: "Email",
      href: buildMailTo(social.email, emailSubject, emailBody),
      Icon: Mail,
      external: false,
    },
  ].filter(Boolean) as Array<{
    label: string;
    href: string;
    Icon: typeof Mail | typeof FaGithub;
    external: boolean;
  }>;

  if (links.length == 0) return null;
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            data-cursor
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-muted-foreground hover:text-foreground"
            {...(external ? {target: "_blank", rel: "noopener noreferrer"} : {})}
          >
            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
