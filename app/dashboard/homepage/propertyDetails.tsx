import Box from '@component/general/Box'
import React, { useState } from 'react'
import CustomText from '@component/general/CustomText'
import Swiper from 'react-native-swiper'
import { Styles } from './styles'
import { Pressable, Image, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'tamagui'
import { PrimaryButton } from '@component/general/CustomButton'
import { OutlineButtonColored } from '@component/general/OutlineButtonColored'
import { Link, router } from 'expo-router'

const property = require('../../../assets/images/foreground/property.png')
const backIcon = require('../../../assets/images/foreground/back.png')
const mass = require('../../../assets/images/foreground/mass.png')
const road = require('../../../assets/images/foreground/road.png')
const dojo = require('../../../assets/images/foreground/dojo.png')
const tap = require('../../../assets/images/foreground/tap.png')
const roadx = require('../../../assets/images/foreground/roadx.png')
const badge = require('../../../assets/images/foreground/badge.png')
const skyscrapper = require('../../../assets/images/foreground/skyscrapper.png')
const house = require('../../../assets/images/foreground/house.png')
const plots = require('../../../assets/images/foreground/plotsx.png')

const propertyDetails = () => {
  
  // const [isLike, setLiked] = useState(false)

  const propertyImg = [
    {id: 123, image: property, isLiked:true,},
    {id: 222, image: property, isLiked:false,},
  ]

  const features = [
  {id:1, icon:mass, text:'Steady Electricity', bg:'#ECFDF3'},
  {id:2, icon:road, text:'Good Road & Network', bg:'#FFF4ED'},
  {id:3, icon:dojo, text:'3 minutes to Akwa Timber Market', bg:'#F0FDF9'},
  {id:4, icon:tap, text:'Adequate and Reliable Water Supply ', bg:'#EFF8FF'},
  {id:5, icon:roadx, text:'Quick accessibility to Akwa Onitsha expressway ', bg:'#FFFroadx'},
  ]
  const landmark = [
  {id:6, icon:badge, text:'Police Headquarters ', bg:'#FEF3F2'},
  {id:7, icon:skyscrapper, text:'Dubai Estate', bg:'#F4F3FF'},
  {id:8, icon:house, text:'Executive homes', bg:'#FFF1F3'}
  ]
  const plotArray = [
  {id:9, sqm:'465', CGC:'01', isSold: true , price:'5,000,000'},
  {id:10, sqm:'465', CGC:'01', isSold: false, price:'5,000,000'},
  {id:11, sqm:'465', CGC:'01', isSold: false, price:'5,000,000'},
  {id:12, sqm:'465', CGC:'01', isSold: false, price:'5,000,000'},
  {id:13, sqm:'465', CGC:'01', isSold: false, price:'5,000,000'},
  {id:14, sqm:'465', CGC:'01', isSold: false, price:'5,000,000'},
  {id:15, sqm:'465', CGC:'01', isSold: false, price:'5,000,000'},
  
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
                                    <Link href={'/dashboard/homepage/home'}>
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
              <CustomText variant={'subheader'} fontSize={16}>Land at Lugbe</CustomText>
            </Box>

            <Box flexDirection={'row'}>
               <Box width={'50%'}>
                  <Box  flexDirection={'row'}>
                    <Box justifyContent={'center'}>
                      <Ionicons name='location-outline' fontweight={'800'} size={16} color={'#2D66DD'}/>
                    </Box>
                    <Box marginLeft={'xs'}>
                     <CustomText fontSize={12} >Lugbe-Abuja, Nigeria</CustomText>
                    </Box>
                  </Box>
                </Box>
            </Box>
           <ScrollView>
              <Box>
                <CustomText variant={'subheader'} fontSize={16}>About</CustomText>
                <CustomText fontSize={14}>CORAL GARDEN ESTATE is a well 
                planned estate within a serene, beautiful environment suitable 
                for all in the beautiful city of Awka, Anambra State.</CustomText>
              </Box>

              <Box alignItems={'center'} justifyContent={'center'} height={40}>
                <Pressable style={{width:'30%', height:26, borderWidth:1,borderColor:'#D0D5DD', borderRadius:15, display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <Box width={'90%'} height={'90%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                        <CustomText fontWeight={'800'} fontSize={10}>Read more</CustomText>
                        <Ionicons name='chevron-down-outline' fontweight={'800'} size={16}  />                  
                  </Box>
                </Pressable>
              </Box>
              <Box>
                <Link href="/dashboard/homepage/landReviews">
                  <CustomText textDecorationLine={'underline'} fontSize={12} fontWeight={'800'} style={{color:'#2D66DD'}}>Land Reviews (10)</CustomText>
                </Link>
              </Box>
              <Box marginTop={'md'}>
                <CustomText fontSize={16} fontWeight={'800'}>Features</CustomText>
              </Box>
              <Box>
                {
                  features.map((item)=>{
                    return(
                    <Box flexDirection={'row'} marginTop={'md'}>
                      <Box width={'10%'} justifyContent={'center'} key={item.id}>
                        <Box justifyContent={'center'} alignItems={'center'} borderRadius={10} width={30} height={30} style={{backgroundColor:item?.bg}}>
                            <Image resizeMode='cover' source={item.icon}/>
                        </Box>
                      </Box>
                      <Box width={'80%'} justifyContent={'center'}>
                        <CustomText fontSize={14}>{item.text}</CustomText>
                      </Box>
                    </Box>
                    )
                  })
                }
                
              </Box>
              <Box marginTop={'md'}>
                  <CustomText fontSize={16} fontWeight={'800'}>Land Mark</CustomText>
              </Box> 
              <Box height={1000}>
                <Box>
                  {
                    landmark.map((item)=>{
                      return(
                      <Box flexDirection={'row'} marginTop={'md'}>
                        <Box width={'10%'} justifyContent={'center'} key={item.id}>
                          <Box justifyContent={'center'} alignItems={'center'} borderRadius={10} width={30} height={30} style={{backgroundColor:item?.bg}}>
                              <Image resizeMode='cover' source={item.icon}/>
                          </Box>
                        </Box>
                        <Box width={'80%'} justifyContent={'center'}>
                          <CustomText fontSize={14}>{item.text}</CustomText>
                        </Box>
                      </Box>
                      )
                    })
                  }
                  
                </Box>
                <Box marginTop={'md'}>
                    <CustomText fontSize={16} fontWeight={'800'}>Documentation</CustomText>
                    <CustomText fontSize={14} fontWeight={'200'} marginTop={'xs'}>Deed of conveyance</CustomText>
                    <CustomText fontSize={14} fontWeight={'200'} marginTop={'xs'}>Registered Survey Plan</CustomText>
                </Box>
                <Box marginTop={'md'}>
                    <CustomText fontSize={16} fontWeight={'800'}>Price Based on Payment Plan</CustomText>
                    <Box flexDirection={'row'}>
                      <CustomText fontSize={14}>3 months (outright) - </CustomText>
                      <CustomText fontSize={14}>{'\u20A6'}6m </CustomText>
                    </Box>
                    <Box flexDirection={'row'}>
                      <CustomText fontSize={14}>6 months - </CustomText>
                      <CustomText fontSize={14}>{'\u20A6'}6.5m </CustomText>
                    </Box>
                    <Box flexDirection={'row'}>
                      <CustomText fontSize={14}>12 months - </CustomText>
                      <CustomText fontSize={14}>{'\u20A6'}7m </CustomText>
                    </Box>
                </Box>
                <Box marginTop={'md'}>
                    <CustomText fontSize={16} fontWeight={'800'}>Plots</CustomText>
                    <Box height={200} width={'100%'} marginTop={'md'}>
                      <Image source={plots} resizeMode='cover' style={{width:'100%', height:'100%'}}/>
                    </Box>
                </Box>
                <Box marginTop={'md'}>
                    {
                      plotArray.map((item)=>{
                        return(
                          <>
                          <Box flexDirection={'row'} key={item.id}>
                            <Box width={'70%'} flexDirection={'row'} alignItems={'center'}>
                                <CustomText fontSize={14} fontWeight={'200'} >{item.sqm} SQM (CGC - {item.CGC})</CustomText>
                                {item.isSold == true?
                                 
                                 <Pressable style={{width:'20%', height:25, borderWidth:1,borderColor:'#F04438', 
                                  borderRadius:15, display:'flex', justifyContent:'center', alignItems:'center', marginLeft:2}}>
                                  <Box width={'90%'} height={'90%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <Box borderRadius={100} height={6} width={6} style={{backgroundColor:'#F04438'}}></Box>
                                        <CustomText fontWeight={'800'} fontSize={10} paddingLeft={'xs'}>Sold</CustomText>
                                                        
                                  </Box>
                                </Pressable> :null
                                 
                                }
                            </Box>
                            <Box width={'30%'} alignItems={'center'}>
                                <CustomText fontSize={14} fontWeight={'800'}>{'\u20A6'}{item.price} </CustomText>
                            </Box>
                          </Box>
                          </>
                        )
                      })
                    }
                </Box>
                <Box flexDirection={'row'} justifyContent={'space-between'} marginTop={'lg'}>
                  <Box width={'48%'}>
                  <OutlineButtonColored label='Schedule Inspection' onPress={()=>router.push('/dashboard/homepage/scheduleInspection')} width={'100%'}/>
                  </Box>
                  <Box width={'48%'}>
                    <PrimaryButton label='Make Reservations' onPress={()=>router.push('/dashboard/homepage/makeReservations')} width={'100%'}/>
                  </Box>
                </Box>
              </Box>
             
            </ScrollView>  
           
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default propertyDetails