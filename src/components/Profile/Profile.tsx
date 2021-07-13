import styles from '../Profile/Profile.module.scss';
import { FcUp } from "react-icons/fc";
import { useContext } from 'react';
import Image from 'next/image';
import { ChallengesContext } from '../../contexts/ChallengesContext';
export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <Image src="/manoelduran.jpeg" width="150px" height="150px"  alt="Manoel Duran" />
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

