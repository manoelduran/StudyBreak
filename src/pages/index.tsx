import React from 'react';
import { CompletedChallenges } from '../components/CompletedChallenges/CompletedChallenges';
import { Countdown } from '../components/Countdown/Countdown';
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';
import { Profile } from '../components/Profile/Profile';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox/ChallengeBox';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Home | Move.It</title>
      </Head>
      <ExperienceBar />
      <section>
        <div className={styles.leftContainer}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
