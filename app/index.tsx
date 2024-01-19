import { View, Text } from 'react-native';
import React, {useEffect, useState} from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { OutlineButton } from '@component/general/OutlineButton'
import { PrimaryButton } from '@component/general/CustomButton'
import {
  useRouter  
} from 'expo-router';
import Onboarding from './splash/onboarding'

const Home = () => {
  const router = useRouter();

  return (
    <>
    <Onboarding/>
    </>
  )
}

export default Home