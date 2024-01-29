import React from 'react'
import {
  useRouter  
} from 'expo-router';


const Home = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/splash/onboarding');
  }, [])
  return (
    <>
    
    </>
  )
}

export default Home