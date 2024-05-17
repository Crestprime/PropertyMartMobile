import React, { useEffect, useState } from 'react';
import * as SecureStorage from 'expo-secure-store';
import { useRouter } from 'expo-router';
import LandingPage from './splash/landingPage';

const Home = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function retrieveUserDetails() {
      try {
        const userDetailsString = await SecureStorage.getItemAsync("userDetails");
        if (userDetailsString) {
          const userDetails = JSON.parse(userDetailsString);
          if (userDetails.token) {
            console.log("Token Retrieved:", userDetails.token);
            setIsLoggedIn(true);
      
            router.replace("/dashboard/homepage/home/");
          } else {
            console.log("Token is not stored.");
            setIsLoggedIn(false);
          }
          return userDetails;
        } else {
          console.log("User details not found in secure storage.");
          router.replace('/splash/onboarding')
          return null;
        }
      } catch (error) {
        console.error("Error retrieving user details:", error);
        return null;
      }
    }
    retrieveUserDetails();
  
  }, []); 
 
  return (
      <LandingPage />
  );
}

export default Home;
