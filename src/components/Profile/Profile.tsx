import styles from '../Profile/Profile.module.scss';
import { FcUp } from "react-icons/fc";
import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/manoelduran.png" alt="Manoel Duran" />
      <div>
        <strong>
          Manoel Duran
        </strong>
        <p>
          <FcUp fontSize="1.5rem" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

