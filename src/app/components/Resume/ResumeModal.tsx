import styles from "./ResumeModal.module.css";
import GiggleButton from "../GiggleButton/GiggleButton";
import { faFile, faClose } from "@fortawesome/free-solid-svg-icons";

const ResumeModal = ({ onClose }: { onClose: () => void }) => (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <iframe src="/Ashutosh_Rath_Resume.pdf" title="Resume" className={styles.resumeViewer} />
      <div
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/Ashutosh_Rath_Resume.pdf";
          link.download = "Ashutosh_Rath_Resume.pdf";
          link.click();
        }}
      >
        <GiggleButton text="Download PDF" overlayname="resumeDownload" isIcon={false} icon={faFile} isIconAnimated={false} name="resumeDownloadBtn" name2="" onClick={{ event: "none", data: "" }} />
      </div>
    </div>
    <div className={styles.modalClose} onClick={onClose}>
      <GiggleButton text="" overlayname="socialOverlay" isIcon icon={faClose} isIconAnimated name="iconButtons" name2="" onClick={{ event: "none", data: "" }} />
    </div>
  </div>
);

export default ResumeModal;
