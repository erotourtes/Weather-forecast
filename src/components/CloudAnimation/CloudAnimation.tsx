import { FaCloud } from "react-icons/fa";
import styles from "./CloudAnimation.module.css";

const CloudAnimation = () => {
  return (
    <div className={styles["cloud-animation"]}>
      <FaCloud className={styles.cloud} size={150} />
    </div>
  );
};

export default CloudAnimation;
