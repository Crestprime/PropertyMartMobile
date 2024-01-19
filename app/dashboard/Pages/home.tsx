import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { ScrollView } from 'tamagui'
import { Styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const sidebar = require('../../../assets/images/foreground/breadcrumb.png')
const setup_icon = require('../../../assets/images/foreground/setup-icon.png')
const Home = () => {

  const [username, setUsername] = useState('Jude');
  

  return (
    <ScrollView>
      <Box style={Styles.martContainer} >
        <Box flexDirection={'row'} height={'100%'} width={'100%'} justifyContent={'center'} >
          <Box  width={'95%'} height={'100%'}>
            <Box height={100} width={'100%'} >
              <Box  flexDirection={'row'}  height={30} >
                <Box width={'50%'} flexDirection={'row'} justifyContent={'flex-start'}>
                    <Box width={40} height={40} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} borderRadius={100}>
                    <TouchableOpacity>
                      <Image source={sidebar} resizeMode="cover" />
                    </TouchableOpacity>
                   </Box>
                  
                </Box>
                <Box width={'50%'}  flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'}>
                    <TouchableOpacity>
                      <Box width={30} height={30} backgroundColor={'textInputBorderColor'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} borderRadius={100}>
                          <Ionicons name="notifications-outline" size={20}/>
                      </Box>
                    </TouchableOpacity>
                </Box>
              </Box>
              <Box marginTop={'xs'} >
                <CustomText variant={'subheader'} fontWeight={'100'} fontSize={14}> Welcome {username} </CustomText>              
              </Box>   
              <Box >
                <CustomText variant={'header'} lineHeight={14} fontSize={16}> What do you want to do today? </CustomText>
              </Box>
            </Box>
            <Box height={150} width={'100%'} borderRadius={10} style={{backgroundColor:'#FEF3F2'}}  flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                <Box height={'90%'} width={'95%'}  flexDirection={'row'} >
                  <Box width={'75%'}>
                  <Box paddingTop={'md'} paddingBottom={'xs'}>
                      <CustomText variant={'header'} style={{color:'#7A271A'}} lineHeight={14} fontSize={15}>Complete your account setup </CustomText>
                  </Box>
                  <Box >
                      <CustomText variant={'subheader'} style={{color:'#912018'}} lineHeight={14} fontSize={10}>Complete your account setup to access more features on Property Mart </CustomText>
                  </Box>
                  <Box paddingTop={'md'}>
                    <Box style={{backgroundColor:'#D92D20'}} width={'40%'} flexDirection={'row'} justifyContent={'center'} borderRadius={10}>
                      <TouchableOpacity>
                        <Pressable onPress={()=> window.alert('set up')} >
                            <CustomText variant={'subheader'} color={'secondaryBackgroundColor'} fontSize={12}>Setup now</CustomText>
                        </Pressable>
                      </TouchableOpacity>
                    </Box>
                  </Box>
                </Box>
                <Box width={'25%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                    <Image source={setup_icon} resizeMode="cover" />
                </Box>
              </Box>
            </Box>
            <Box height={150} width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
                   <Box height={'90%'} width={'95%'}  flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                     <Box width={'48%'} backgroundColor={'primaryColor'} borderRadius={10} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                       <Box height={'90%'} width={'90%'} >
                            <Box marginTop={'md'} height={40} width={40} borderRadius={100} backgroundColor={'btnBlue'} borderWidth={1} borderColor={'textInputBorderColor'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                    <Ionicons name="settings-outline" size={20} color={'#FFFFFF'}/>
                            </Box>
                            <Box>
                            <CustomText variant="subheader" lineHeight={30} color={'secondaryBackgroundColor'} fontSize={11}>Owned Properties</CustomText>
                            </Box>
                            <Box>
                            <CustomText variant="subheader" lineHeight={20} color={'secondaryBackgroundColor'} fontSize={20}>0</CustomText>
                            </Box>
                       </Box>
                     </Box>
                     <Box width={'48%'} backgroundColor={'errorColor'} borderRadius={10} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                       <Box height={'90%'} width={'90%'} >
                            <Box marginTop={'md'} height={40} width={40} borderRadius={100} backgroundColor={'errorColor'} borderWidth={1} borderColor={'textInputBorderColor'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                    <Ionicons name="settings-outline" size={20} color={'#FFFFFF'}/>
                            </Box>
                            <Box>
                            <CustomText variant="subheader" lineHeight={30} color={'secondaryBackgroundColor'} fontSize={11}>Owned Properties</CustomText>
                            </Box>
                            <Box>
                            <CustomText variant="subheader" lineHeight={20} color={'secondaryBackgroundColor'} fontSize={20}>0</CustomText>
                            </Box>
                       </Box>
                     </Box>
                     
                     
                   </Box>
                  
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  )
}

export default Home;