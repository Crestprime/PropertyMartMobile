import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Box from '@component/general/Box';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import { router } from 'expo-router';

const summary = () => {
  return (
    <SafeAreaView>
      <Box>
        <Box padding={'sm'}>
          <Ionicons
            name="arrow-back-outline"
            size={25}
            onPress={() => router.back()}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default summary;
