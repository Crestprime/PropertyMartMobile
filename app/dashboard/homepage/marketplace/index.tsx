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
import { useRouter } from 'expo-router'
import useForm from '@hooks/useForm'
import { CustomTextInput } from '@component/form/CustomInput'
import { searchSchema } from '@services/validation'
import Lands from './lands'
import Building from './building'
import Materials from './materials'
// import { useNavigation } from '@react-navigation/native';


const sidebar = require('../../../../assets/images/foreground/breadcrumb.png')
const setup_icon = require('../../../../assets/images/foreground/setup-icon.png')
const location = require('../../../../assets/images/foreground/Icon.png')
const verified = require('../../../../assets/images/foreground/Verified.png')
const marketPlace = require('../../../../assets/images/foreground/marketplace.png')
const love = require('../../../../assets/images/foreground/love.png')
const cart = require('../../../../assets/images/foreground/cart.png')
const calendar = require('../../../../assets/images/foreground/calendar.png')
const user = require('../../../../assets/images/foreground/user.png')
const chat = require('../../../../assets/images/foreground/chat.png')
const bell = require('../../../../assets/images/foreground/bell.png')
const preferencesettings = require('../../../../assets/images/foreground/preferencesettings.png')
const star = require('../../../../assets/images/foreground/star.png')
const logout = require('../../../../assets/images/foreground/logout.png')

const MarketPlace = () => {

  const [showSidebar, setShowSidebar] = useState(false)
  const [lands, setLands] = useState(false)
  const [building, setBuilding] = useState(true)
  const [materials, setMaterials] = useState(false)


  const router = useRouter()

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
      id: 2, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705890068/card_pwrye9.png',
      header:'Land at Umagwa', sqm:'445', subheader:'Capital City Development', text:'Port-Harcourt, Nigeria' 
    },
    { 
      id: 3, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705890068/card_pwrye9.png',
      header:'Land at Ikwere road', sqm:'567', subheader:'Capital City Development', text:'Port-Harcourt, Nigeria' 
    }
   
  ];

  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      search: '',
    },
    validationSchema: searchSchema,
  })
   const toggleSidebar = () => {
      setShowSidebar(previousState => !previousState)
   }
  
   const propertyDetails = () => {
      router.push('/dashboard/homepage/home/propertyDetails',)
   }
  return renderForm(
 
      <SafeAreaView> 
        {/* <ScrollView> */}
          <Box style={Styles.martContainer} >
            <Box flexDirection={'row'} height={'100%'} width={'100%'} alignItems={'center'} justifyContent={'center'} >
            <Box  width={'95%'} height={'90%'}>
                <Box height={120} width={'100%'} paddingLeft={'sm'} >
                  <Box marginTop={'xl'}>
                    <CustomText fontSize={18} variant={'header'}>Marketplace</CustomText>
                  </Box>
                  <Box flexDirection={'row'} marginTop={'md'}>
                     <Box width={'80%'} justifyContent={'center'}>
                        <Box style={{marginTop:-35}}>
                            <CustomTextInput name='search' placeholder='' label='' isPassword={false}  />
                        </Box> 
                    </Box>
                    <Box width={'20%'} alignItems={'center'}>
                       <Box borderRadius={10} borderWidth={1} borderColor={'textInputBorderColor'} height={40} width={40} justifyContent={'center'} alignItems={'center'}>
                          <Pressable onPress={()=>toggleSidebar()}>
                                <TouchableOpacity>
                                  <Image source={sidebar} resizeMode="cover" />
                                </TouchableOpacity>
                            </Pressable>
                       </Box>
                    </Box>
                  </Box>
                  <Box height={40} width={'100%'} marginTop={'lg'} flexDirection={'row'}>
                    <Box borderRadius={10} flexDirection={'row'} borderWidth={1} borderColor={'textInputBorderColor'} height={'100%'} width={'60%'}>
                       <Pressable style={{width:'30%'}} onPress={()=>[setLands(true), setBuilding(false),setMaterials(false)]}>
                            <Box  justifyContent={'center'} alignItems={'center'} height={'100%'} borderTopLeftRadius={10} borderBottomLeftRadius={10} backgroundColor={lands?'btnBlue':'secondaryBackgroundColor'}>
                                <CustomText fontSize={10} fontWeight={'800'}  color={lands?'secondaryBackgroundColor':'black'}>Lands</CustomText>
                            </Box>
                       </Pressable>
                        <Pressable style={{width:'38%'}} onPress={()=>[setLands(false), setBuilding(true),setMaterials(false)]}>
                            <Box  justifyContent={'center'} alignItems={'center'} height={'100%'} backgroundColor={building?'btnBlue':'secondaryBackgroundColor'}>
                                <CustomText fontSize={10} fontWeight={'800'}  color={building?'secondaryBackgroundColor':'black'}>Buiding</CustomText>
                            </Box>
                       </Pressable>
                        <Pressable style={{width:'32%'}} onPress={()=>[setLands(false), setBuilding(false),setMaterials(true)]}>
                            <Box  justifyContent={'center'} alignItems={'center'} padding={'sm'} height={'100%'} width={'100%'} borderTopRightRadius={10} borderBottomRightRadius={10} backgroundColor={materials?'btnBlue':'secondaryBackgroundColor'}>
                                <CustomText fontSize={10} fontWeight={'800'} color={materials?'secondaryBackgroundColor':'black'}>Materials</CustomText>
                            </Box>
                       </Pressable>
                    </Box>
                  </Box>
                </Box>
                {lands?
                  <>
                  <Lands/>
                  </>
                  :
                  building?
                  <>
                   <Building/>
                  </>
                  :
                  materials?
                  <>
                  <Materials/>
                  </>
                  : null
                }
                
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

export default MarketPlace;

