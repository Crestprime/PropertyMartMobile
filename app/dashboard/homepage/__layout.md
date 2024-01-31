import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router/tabs'
import { Ionicons } from '@expo/vector-icons'
import theme from '@theme/index'
import { Stack } from 'expo-router'

const Icon = ({ focused, name }: {
    focused: boolean,
    name: string|any,
}) => {
    return (
        <Ionicons name={name} size={20} color={focused ? theme.colors.primaryColor : 'gray'} />
    )
}

const _layout = () => {
  return (
    <>
      <Tabs safeAreaInsets={{ bottom: 10, left: 5, right: 5,  }} >
          <Tabs.Screen name='home' options={{
              tabBarIcon: ({ focused}) => <Icon focused={focused} name={'home-outline'} />,
              tabBarLabelStyle: {
                  fontSize: 10,
                  lineHeight:10,
                  marginTop:-10
              }
          }} />

          <Tabs.Screen name='marketplace' options={{
              tabBarIcon: ({ focused}) => <Icon focused={focused} name={'business-outline'} />,
              tabBarLabelStyle: {
                  fontSize: 10,
                  lineHeight:10,
                  marginTop:-10
              }
          }} />
          <Tabs.Screen name='investment' options={{
              tabBarIcon: ({ focused}) => <Icon focused={focused} name={'cash-outline'} />,
              tabBarLabelStyle: {
                  fontSize: 10,
                  lineHeight:10,
                  marginTop:-10
              }
          }} />
          <Tabs.Screen name='wallet' options={{
              tabBarIcon: ({ focused}) => <Icon focused={focused} name={'wallet-outline'} />,
              tabBarLabelStyle: {
                  fontSize: 10,
                  lineHeight:10,
                  marginTop:-10
              }
          }} />
          <Tabs.Screen name='construction' options={{
              tabBarIcon: ({ focused}) => <Icon focused={focused} name={'construct-outline'} />,
              tabBarLabelStyle: {
                  fontSize: 10,
                  lineHeight:10,
                  marginTop:-10
              }
          }} />
      </Tabs>
    </>
    
  )
}

export default _layout