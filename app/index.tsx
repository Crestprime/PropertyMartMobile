import React from 'react'
import {
  useRouter  
} from 'expo-router';
import Onboarding from '../pages/onboarding/onboarding'


const Home = () => {
  const router = useRouter();

  return (
    <>
    <Onboarding/>
    </>
  )
}

export default Home