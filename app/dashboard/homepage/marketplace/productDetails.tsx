import Box from '@component/general/Box'
import React, { useState } from 'react'
import CustomText from '@component/general/CustomText'
import Swiper from 'react-native-swiper'
import { Styles } from '../styles'
import { Pressable, Image, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'tamagui'
import { PrimaryButton } from '@component/general/CustomButton'
import { OutlineButtonColored } from '@component/general/OutlineButtonColored'
import { Link, router } from 'expo-router'

const property = require('../../../../assets/images/foreground/dangote.png')
const backIcon = require('../../../../assets/images/foreground/back.png')


const propertyDetails = () => {
  
  // const [isLike, setLiked] = useState(false)

  const propertyImg = [
    {id: 123, image: property, isLiked:false,},
    {id: 222, image: property, isLiked:false,},
  ]
  const addToFavourites = () => {
    //  setLiked(previous => !previous)
    window.alert('hullo')
  }

  return (
    <Box style={Styles.martContainer } justifyContent={'center'}>
      <Box width={'100%'} height={'90%'}>
        <Box height={'35%'}>
              <Swiper
                          dotColor="#ffffff"
                          activeDotColor="#2D66DD"
                          showsPagination={true}
                        >
                        
                          {propertyImg.map((item) => (
                          
                            <Pressable key={item.id} android_ripple={{color:'#000000c0'}} style={Styles.slide1} onPress={()=>propertyDetails()}>
                              <ImageBackground source={item.image} style={Styles.propDtls}>
                                <Box height={50} alignItems={'center'} flexDirection={'row'} >
                                  <Box width={'50%'} alignItems={'flex-start'} paddingLeft={'md'}>
                                    <Link href={'/dashboard/homepage/home/'}>
                                     <Image resizeMode='cover' source={backIcon}/>
                                    </Link>
                                  </Box>
                                  <Box width={'50%'} alignItems={'flex-end'} paddingRight={'md'}>
                                    <Pressable onPress={null} android_ripple={{color: '#000000c0'}} style={{borderRadius:100}}>
                                        {   item.isLiked === false? <Ionicons name='heart-outline' size={25} color={'white'}/>
                                        : item.isLiked === true? <Ionicons name='heart' size={25} color={'red'}/> : null
                                        }
                                    </Pressable>
                                  </Box>
                                </Box>
                              </ImageBackground>
                            </Pressable>
                          
                          ))}
                      </Swiper>
        </Box>
        <Box height={'65%'} alignItems={'center'}> 
          <Box width={'95%'}>
            <Box marginTop={'md'}>
              <CustomText variant={'subheader'} fontSize={16}>Dangote  3X Grade Cement</CustomText>
            </Box>

            <Box flexDirection={'row'}>
               <Box width={'50%'}>
                  <Box  flexDirection={'row'}>
                    <Box justifyContent={'center'}>
                      <Ionicons name='cart-sharp' fontweight={'800'} size={16} color={'#2D66DD'}/>
                    </Box>
                    <Box marginLeft={'xs'}>
                     <CustomText fontSize={12} color={'successColor'} > Available in stock</CustomText>
                    </Box>
                  </Box>
                </Box>
            </Box>
           <ScrollView>
              <Box>
                <CustomText variant={'subheader'} fontSize={16}>Product Details</CustomText>
                <CustomText fontSize={14}>Cement plays a fundamental role in construction, serving as the backbone for many structures and providing the essential binding component for various</CustomText>
              </Box>

              <Box alignItems={'center'} justifyContent={'center'} height={40}>
                <Pressable style={{width:'30%', height:26, borderWidth:1,borderColor:'#D0D5DD', borderRadius:15, display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <Box width={'90%'} height={'90%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                        <CustomText fontWeight={'800'} fontSize={10}>Read more</CustomText>
                        <Ionicons name='chevron-down-outline' fontweight={'800'} size={16}  />                  
                  </Box>
                </Pressable>
              </Box>
              
              <Box marginTop={'md'}>
                <CustomText fontSize={16} fontWeight={'800'}>Features</CustomText>
              </Box>
              <Box>
                    <CustomText fontSize={14} fontWeight={'200'} marginTop={'xs'}>Deed of conveyance</CustomText>
                    <CustomText fontSize={14} fontWeight={'200'} marginTop={'xs'}>Registered Survey Plan</CustomText>
                
              </Box>
              
              <Box height={1000}>
            
                <Box marginTop={'md'}>
                    <CustomText fontSize={16} fontWeight={'800'}>Refund Policy</CustomText>
                    <CustomText fontSize={14} fontWeight={'200'} marginTop={'xs'}>Free return within 7 days for all eligible items. of conveyance</CustomText>
                    {/* <CustomText fontSize={14} fontWeight={'200'} marginTop={'xs'}>Registered Survey Plan</CustomText> */}
                </Box>
                <Box marginTop={'md'}>
                <Link href="/dashboard/homepage/home/landReviews">
                  <CustomText textDecorationLine={'underline'} fontSize={12} fontWeight={'800'} style={{color:'#2D66DD'}}>Land Reviews (10)</CustomText>
                </Link>
              </Box>
            
              </Box>

             
            </ScrollView>  
           
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default propertyDetails;