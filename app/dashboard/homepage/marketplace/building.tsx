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
import { Link, router } from 'expo-router'
import { useRouter } from 'expo-router'
import useForm from '@hooks/useForm'
import { CustomTextInput } from '@component/form/CustomInput'

const verified = require('../../../../assets/images/foreground/Verified.png')
const location = require('../../../../assets/images/foreground/Icon.png')

const Building = () => {

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

      const propertyDetails = () => {
        router.push('/dashboard/homepage/home/propertyDetails',)
     }
  return (
            <Box>
             <ScrollView style={{marginTop:60}}>
              <Box height={350} style={Styles.containerS}  marginTop={'xl'}>
                  <Box height={50} flexDirection={'row'} paddingLeft={'md'} paddingRight={'md'}>
                      <Box width={'50%'}>
                        <CustomText variant="subheader" fontSize={16}>Fetuterd Listings</CustomText>
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
                      
                        <Pressable key={image?.id} android_ripple={{color:'#000000c0'}} style={Styles.slide1} onPress={()=>propertyDetails()}>
                          <Image source={{ uri: image?.uri }} style={Styles.image1} />
                          <Box style={Styles.content}>
                              <Box width={'100%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                <Box width={'90%'} height={130} justifyContent={'center'}>
                                <Box>
                                        <Box flexDirection={'row'}>
                                            <Box width={'70%'} flexDirection={'row'} >
                                              <CustomText variant={'subheader'} fontSize={16}>{image?.header}</CustomText>
                                              <Box justifyContent={'center'} padding={'xs'}>
                                                <Image source={verified} resizeMode="cover" />
                                              </Box>
                                            </Box>
                                            <Box width={'30%'} alignItems={'flex-end'}>
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
                        </Pressable>
                      
                      ))}
                  </Swiper>
              </Box>

              <Box height={350} style={Styles.containerS}  marginTop={'xl'}>
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
                      
                        <Pressable key={image?.id} android_ripple={{color:'#000000c0'}} style={Styles.slide1} onPress={()=>propertyDetails()}>
                          <Image source={{ uri: image?.uri }} style={Styles.image1} />
                          <Box style={Styles.content}>
                              <Box width={'100%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                <Box width={'90%'} height={130} justifyContent={'center'}>
                                <Box>
                                        <Box flexDirection={'row'}>
                                            <Box width={'70%'} flexDirection={'row'} >
                                              <CustomText variant={'subheader'} fontSize={16}>{image?.header}</CustomText>
                                              <Box justifyContent={'center'} padding={'xs'}>
                                                <Image source={verified} resizeMode="cover" />
                                              </Box>
                                            </Box>
                                            <Box width={'30%'} alignItems={'flex-end'}>
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
                        </Pressable>
                      
                      ))}
                  </Swiper>
              </Box>
              <Box height={350} style={Styles.containerS}  marginTop={'xl'}>
                  <Box height={50} flexDirection={'row'} paddingLeft={'md'} paddingRight={'md'}>
                      <Box width={'70%'}>
                        <CustomText variant="subheader" fontSize={16}>Popular Locations</CustomText>
                      </Box>
                      <Box width={'30%'} alignItems={'flex-end'}>
                        <CustomText variant="subheader" color={'btnBlue'} fontSize={14}>View all</CustomText>
                      </Box>
                  </Box>
                  <Swiper
                      dotColor="#ffffff"
                      activeDotColor="#2D66DD"
                      showsPagination={false}
                    >
                    
                      {cardImg?.map((image) => (
                      
                        <Pressable key={image?.id} android_ripple={{color:'#000000c0'}} style={Styles.slide1} onPress={()=>propertyDetails()}>
                          <Image source={{ uri: image?.uri }} style={Styles.image1} />
                          <Box style={Styles.content}>
                              <Box width={'100%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                <Box width={'90%'} height={130} justifyContent={'center'}>
                                <Box>
                                        <Box flexDirection={'row'}>
                                            <Box width={'70%'} flexDirection={'row'} >
                                              <CustomText variant={'subheader'} fontSize={16}>{image?.header}</CustomText>
                                              <Box justifyContent={'center'} padding={'xs'}>
                                                <Image source={verified} resizeMode="cover" />
                                              </Box>
                                            </Box>
                                            <Box width={'30%'} alignItems={'flex-end'}>
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
                        </Pressable>
                      
                      ))}
                  </Swiper>
              </Box>
              <Box height={350} style={Styles.containerS}  marginTop={'xl'}>
                  <Box height={50} flexDirection={'row'} paddingLeft={'md'} paddingRight={'md'}>
                      <Box width={'70%'}>
                        <CustomText variant="subheader" fontSize={16}>Lands in Portharcourt</CustomText>
                      </Box>
                      <Box width={'30%'} alignItems={'flex-end'}>
                        <CustomText variant="subheader" color={'btnBlue'} fontSize={14}>View all</CustomText>
                      </Box>
                  </Box>
                  <Swiper
                      dotColor="#ffffff"
                      activeDotColor="#2D66DD"
                      showsPagination={false}
                    >
                    
                      {cardImg?.map((image) => (
                      
                        <Pressable key={image?.id} android_ripple={{color:'#000000c0'}} style={Styles.slide1} onPress={()=>propertyDetails()}>
                          <Image source={{ uri: image?.uri }} style={Styles.image1} />
                          <Box style={Styles.content}>
                              <Box width={'100%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                <Box width={'90%'} height={130} justifyContent={'center'}>
                                <Box>
                                        <Box flexDirection={'row'}>
                                            <Box width={'70%'} flexDirection={'row'} >
                                              <CustomText variant={'subheader'} fontSize={16}>{image?.header}</CustomText>
                                              <Box justifyContent={'center'} padding={'xs'}>
                                                <Image source={verified} resizeMode="cover" />
                                              </Box>
                                            </Box>
                                            <Box width={'30%'} alignItems={'flex-end'}>
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
                        </Pressable>
                      
                      ))}
                  </Swiper>
              </Box>
             
              <Box height={50}>
                {/*  this is a vacant space left on purpose */}
              </Box>
              </ScrollView>
            </Box>
  )
}

export default Building