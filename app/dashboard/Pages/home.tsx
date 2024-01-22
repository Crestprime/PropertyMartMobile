import { View, Text, Image, Pressable,AppRegistry, } from 'react-native'
import React, { useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { ScrollView } from 'tamagui'
import { Styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
import CustomCarousel from '../../../components/carousel'

const sidebar = require('../../../assets/images/foreground/breadcrumb.png')
const setup_icon = require('../../../assets/images/foreground/setup-icon.png')
const location = require('../../../assets/images/foreground/Icon.png')
const verified = require('../../../assets/images/foreground/Verified.png')
const Home = () => {

  const [username, setUsername] = useState('Jude');
  const images = [
    { id: 1, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705888884/banner_legqnq.png' },
    { id: 2, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705888884/banner_legqnq.png' },
    { id: 3, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705888884/banner_legqnq.png' },
  ];
  const cardImg = [
    { 
      id: 1, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705890068/card_pwrye9.png',
      header:'Land at Ludgbe', sqm:'465', subheader:'Capital City Development', text:'Ludgbe-Abuja, Nigeria' 
    },
    { 
      id: 1, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705890068/card_pwrye9.png',
      header:'Land at Umagwa', sqm:'445', subheader:'Capital City Development', text:'Port-Harcourt, Nigeria' 
    },
    { 
      id: 1, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705890068/card_pwrye9.png',
      header:'Land at Ikwere road', sqm:'567', subheader:'Capital City Development', text:'Port-Harcourt, Nigeria' 
    }
   
  ];

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
            <Box height={220} style={Styles.containerS}>
                <Swiper
                    dotColor="#ffffff"
                    activeDotColor="#2D66DD"
                    showsPagination={true}
                  >
                    {images?.map((image) => (
                      <View key={image?.id} style={Styles.slide}>
                        <Image source={{ uri: image?.uri }} style={Styles.image} />
                      </View>
                    ))}
                </Swiper>
            </Box>
            <Box height={350} style={Styles.containerS}>
                 <Box height={50} flexDirection={'row'} paddingLeft={'md'} paddingRight={'md'}>
                    <Box width={'50%'}>
                      <CustomText variant="subheader" fontSize={16}>Suggested for you</CustomText>
                    </Box>
                    <Box width={'50%'} alignItems={'flex-end'}>
                      <CustomText variant="subheader" color={'btnBlue'} fontSize={14}>View all</CustomText>
                    </Box>
                 </Box>
                <Swiper
                    dotColor="#ffffff"
                    activeDotColor="#2D66DD"
                    showsPagination={false}
                  >
                  
                    {cardImg?.map((image) => (
                      <Box key={image?.id} style={Styles.slide1}>
                       
                        <Image source={{ uri: image?.uri }} style={Styles.image1} />
                        <Box style={Styles.content}>
                            <Box width={'100%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                              <Box width={'90%'} height={130} justifyContent={'center'}>
                              <Box>
                                      <Box flexDirection={'row'}>
                                          <Box width={'50%'} flexDirection={'row'}>
                                            <CustomText variant={'subheader'} fontSize={16}>{image?.header}</CustomText>
                                            <Box justifyContent={'center'} padding={'xs'}>
                                              <Image source={verified} resizeMode="cover" />
                                            </Box>
                                          </Box>
                                          <Box width={'50%'} alignItems={'flex-end'}>
                                            <CustomText variant={'subheader'} fontSize={16} color={'primaryColor'} >{image?.sqm} SQM</CustomText>
                                          </Box>
                                      </Box>
                                        <CustomText variant={'subheader'} fontSize={12} color={'textColor'} >{image.subheader}</CustomText>
                                      <Box flexDirection={'row'}>
                                        <Box justifyContent={'center'} paddingRight={'xs'}>
                                          <Image source={location} resizeMode="cover" />
                                        </Box>
                                          <CustomText variant={'subheader'} fontWeight={'100'} fontSize={12} color={'textColor'}>{image?.text}</CustomText>
                                        </Box>
                                  </Box>
                              </Box>
                            </Box>
                        </Box>
                      </Box>
                    
                    ))}
                </Swiper>
            </Box>
            <Box height={50}>

            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  )
}

export default Home;

