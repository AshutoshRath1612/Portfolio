import { contactConfig } from "../configs/contact.config";

export const handleNavigate = (url: string) => () => {
    window.open(url, "_blank");
}

export const sendEmail = () => {
    const email = contactConfig.email;
    const subject = contactConfig.emailSubject;
    const body = contactConfig.emailBody;
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}