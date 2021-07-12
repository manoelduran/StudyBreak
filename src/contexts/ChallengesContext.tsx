import { useEffect } from 'react';
import { createContext, useState, ReactNode, useContext } from 'react';
import challengs from '../../challenges.json';

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceTonNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesContextProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesContextProvider({ children }: ChallengesContextProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const experienceTonNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function levelUp() {
    setLevel(level + 1);
  }
  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challengs.length);
    const challenge = challengs[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/public_notification.mp3').play();
    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🥳', {
        body: `Valendo ${challenge.amount} xp!`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }
    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;
    if (finalExperience >= experienceTonNextLevel) {
      finalExperience = finalExperience - experienceTonNextLevel;
      levelUp();
    }
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }
  return (
    <ChallengesContext.Provider value={{ level, levelUp, currentExperience, challengesCompleted, startNewChallenge, activeChallenge, resetChallenge, experienceTonNextLevel, completeChallenge }}>
      {children}
    </ChallengesContext.Provider>
  )
}