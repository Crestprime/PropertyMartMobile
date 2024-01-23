import { View, Text, Image, Pressable, } from 'react-native'
import React, { useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { ScrollView } from 'tamagui'
import { Styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native'
import { Link } from 'expo-router'


const sidebar = require('../../../assets/images/foreground/breadcrumb.png')
const setup_icon = require('../../../assets/images/foreground/setup-icon.png')
const location = require('../../../assets/images/foreground/Icon.png')
const verified = require('../../../assets/images/foreground/Verified.png')
const marketPlace = require('../../../assets/images/foreground/marketplace.png')
const love = require('../../../assets/images/foreground/love.png')
const cart = require('../../../assets/images/foreground/cart.png')
const calendar = require('../../../assets/images/foreground/calendar.png')
const user = require('../../../assets/images/foreground/user.png')
const chat = require('../../../assets/images/foreground/chat.png')
const bell = require('../../../assets/images/foreground/bell.png')
const preferencesettings = require('../../../assets/images/foreground/preferencesettings.png')
const star = require('../../../assets/images/foreground/star.png')
const logout = require('../../../assets/images/foreground/logout.png')

const Home = () => {

  const [username, setUsername] = useState('Jude');
  const [showSidebar, setShowSidebar] = useState(false)
  const images = [
    { id: 1, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705888884/banner_legqnq.png' },
    { id: 2, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705888884/banner_legqnq.png' },
    { id: 3, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705888884/banner_legqnq.png' },
  ];
  const sidebarPages = [
    { id: 1, icon: marketPlace,title:'My Properties', isNotify: false },
    { id: 2, icon: love, title:'Reservations', isNotify: true },
    { id: 3, icon: cart, title:'Cart', isNotify: true },
    { id: 4, icon: calendar, title:'My Appointments', isNotify: false },
    { id: 5, icon: user, title:'My Account', isNotify: false },
    { id: 6, icon: chat, title:'Chat With Us', isNotify: false },
    { id: 7, icon: bell, title:'Notification Preference', isNotify: false },
    { id: 8, icon: preferencesettings, title:'Settings', isNotify: false },
    { id: 9, icon: star, title:'Rate Us', isNotify: false },
    { id: 10, icon: logout, title:'Logout', isNotify: false },
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
   const toggleSidebar = () => {
      setShowSidebar(previousState => !previousState)
   }
  return (
 
      <SafeAreaView>
        
        {/* <ScrollView> */}
          <Box style={Styles.martContainer} >
            <Box flexDirection={'row'} height={'100%'} width={'100%'} alignItems={'center'} justifyContent={'center'} >
            <Box  width={'95%'} height={'90%'}>
                <Box height={100} width={'100%'} >
                  <Box  flexDirection={'row'}  height={30} >
                    <Box width={'50%'} flexDirection={'row'} justifyContent={'flex-start'}>
                        <Box width={40} height={40} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} borderRadius={100}>
                        <Pressable onPress={()=>toggleSidebar()}>
                          <TouchableOpacity>
                            <Image source={sidebar} resizeMode="cover" />
                          </TouchableOpacity>
                        </Pressable>
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
                <ScrollView>
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
                                  <Link href={'/dashboard/Pages/setupAccount'}>
                                    <CustomText variant={'subheader'} color={'secondaryBackgroundColor'} fontSize={12}>Setup now</CustomText>
                                  </Link>
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
                                  <CustomText variant="subheader" lineHeight={30} color={'secondaryBackgroundColor'} fontSize={11}>Ongoing Projects</CustomText>
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
                    {/*  this is a vacant space left on purpose */}
                  </Box>
                </ScrollView>
              </Box>
            </Box>
          </Box> 
        {/* </ScrollView> */}
        {showSidebar &&
            <Box style={Styles.sidebar} >
              <Box width={'100%'} height={'0%'} style={{ backgroundColor:'#000000c0',opacity:5,}}>
                {/* <CustomText>Hello</CustomText> */}
              </Box>
              <Box width={'100%'} height={'100%'} style={{ backgroundColor:'#000000c0',opacity:10}}>
                <Box height={'100%'} alignItems={'center'} justifyContent={'center'} borderTopRightRadius={10} borderTopLeftRadius={10} backgroundColor={'secondaryBackgroundColor'}>
                  <Box alignItems={'flex-end'} width={'95%'} paddingRight={'xs'}>
                    <Pressable onPress={()=>toggleSidebar()}>
                      <TouchableOpacity>
                        <Ionicons name="close-outline" fontweight='600' size={25}/>
                      </TouchableOpacity>
                    </Pressable>
                      
                  </Box>
                  <Box width={'100%'} height={'90%'}>
                    {sidebarPages.map((item:any)=>{
                      return(
                      
                        <Box key={item.id}>
                          <Box borderBottomWidth={1} borderBottomColor={'textInputBorderColor'} height={50}
                            flexDirection={'row'} paddingLeft={'md'} paddingRight={'lg'} >
                            <Box width={'80%'} flexDirection={'row'}>
                              <Box justifyContent={'center'} alignItems={'center'}>
                                <Box height={30} width={30} borderRadius={100} backgroundColor={'textInputBorderColor'} 
                                  padding={'md'} alignItems={'center'} justifyContent={'center'}>
                                  <Image source={item.icon} resizeMode='cover'/>
                                </Box>
                              </Box>
                              <Box padding={'xs'} paddingLeft={'md'} justifyContent={'center'}>
                                <CustomText variant={'subheader'} fontSize={14} >{item.title}</CustomText>
                              </Box>   
                            </Box>
                            <Box width={'20%'} alignItems={'flex-end'} justifyContent={'center'}>
                                {item.isNotify === true?
                                  <Box height={20} width={20} backgroundColor={'btnBlue'} borderRadius={100} 
                                    alignItems={'center'} justifyContent={'center'}>
                                    <CustomText variant={'xs'} color={'secondaryBackgroundColor'} fontSize={12}>2</CustomText>
                                  </Box> : null
                                }
                            </Box>
                          </Box>
                        </Box>
                      )
                    })

                    }
                  </Box>
                </Box>
              </Box>
            </Box>
          } 
        
      </SafeAreaView>
  )
}

export default Home;

