import styles from '../Profile/Profile.module.scss';
import { FcUp } from "react-icons/fc";
export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/manoelduran.png" alt="Manoel Duran" />
      <div>
        <strong>
          Manoel Duran
        </strong>
        <p>
          <FcUp  fontSize="1.5rem"/>
          Level 1
        </p>
      </div>
    </div>
  );
}

