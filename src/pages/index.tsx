import React from 'react';
import { CompletedChallenges } from '../components/CompletedChallenges/CompletedChallenges';
import { Countdown } from '../components/Countdown/Countdown';
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';
import { Profile } from '../components/Profile/Profile';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox/ChallengeBox';
import { ChallengesContextProvider } from '../contexts/ChallengesContext';
import { CountdownContextProvidder } from '../contexts/CountdownContext';
import { GetServerSideProps } from 'next';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
export default function Home(props: HomeProps) {
  return (
    <ChallengesContextProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted} >
      <div className={styles.container}>
        <Head>
          <title> Home | Move.It</title>
        </Head>
        <ExperienceBar />
        <CountdownContextProvidder>
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
        </CountdownContextProvidder>
      </div>
    </ChallengesContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
