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
import { TouchableOpacity } from 'react-native-gesture-handler'

const property = require('../../../../assets/images/foreground/dangote.png')
const backIcon = require('../../../../assets/images/foreground/back.png')
const avatar = require('../../../../assets/images/foreground/avatar.png')
const verified = require('../../../../assets/images/foreground/Verified.png')

const dangote = require('../../../../assets/images/foreground/dangote.png')
const painter = require('../../../../assets/images/foreground/painter.png')


const propertyDetails = () => {
  
  // const [isLike, setLiked] = useState(false)
  const [showmore, setShowmore] = useState(true)
  const [count, setCount] = useState(0)

  const propertyImg = [
    {id: 123, image: property, isLiked:false,},
    {id: 222, image: property, isLiked:false,},
  ]
  const materials = [
    { 
      id: 1242, item:dangote ,
      header:'Dangote’s Cement', price:'500,000'
    },
    { 
      id: 1234, item:painter ,
      header:'Dangote’s Cement', price:'500,000'
    },  
  ];
  const addToFavourites = () => {
    //  setLiked(previous => !previous)
    window.alert('hullo')
  }

  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  const toggleReadmore = () => {
    setShowmore((previousState) => !previousState);
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

              <TouchableOpacity>
                <Box alignItems={'center'} justifyContent={'center'} height={40}>
                  <Pressable onPress={()=>toggleReadmore()} style={{width:'30%', height:26, borderWidth:1,borderColor:'#D0D5DD', borderRadius:15, display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Box width={'90%'} height={'90%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                          <CustomText fontWeight={'800'} fontSize={10}>Read more</CustomText>
                          <Ionicons name='chevron-down-outline' fontweight={'800'} size={16}  />                  
                    </Box>
                  </Pressable>
                </Box>
              </TouchableOpacity>
              
              <Box marginTop={'md'}>
                <CustomText fontSize={16} fontWeight={'800'}>Features</CustomText>
              </Box>
              <Box>
                    <CustomText fontSize={14} fontWeight={'200'} marginTop={'xs'}>Durabilitys</CustomText>
                    <CustomText fontSize={14} fontWeight={'200'} marginTop={'xs'}>Hardnening</CustomText>
                
              </Box>
              
              <Box height={800}>
                <Box marginTop={'md'}>
                    <CustomText fontSize={16} fontWeight={'800'}>Refund Policy</CustomText>
                    <CustomText fontSize={14} fontWeight={'200'} marginTop={'xs'}>Free return within 7 days for all eligible items. of conveyance</CustomText>
                    {/* <CustomText fontSize={14} fontWeight={'200'} marginTop={'xs'}>Registered Survey Plan</CustomText> */}
                </Box>
                    
             {
              showmore &&
              <Box marginTop={'md'}>
                <Link href="/dashboard/homepage/home/landReviews">
                  <CustomText textDecorationLine={'underline'} fontSize={12} fontWeight={'800'} style={{color:'#2D66DD'}}>Materials Reviews (10)</CustomText>
                </Link>
                <Box marginTop={'lg'}>
                  <CustomText fontSize={16} fontWeight={'800'}>Seller's Information</CustomText> 
                </Box>

                 <Box flexDirection={'row'} alignItems={'center'} height={80}>
                    <Box width={'15%'} flexDirection={'row'} alignItems={'center'}>
                      <Box height={34} width={34} borderRadius={100} borderWidth={1} style={{borderColor:'grey'}}>
                          <Image source={avatar} resizeMode='cover' />
                      </Box>
                    </Box>
                    <Box width={'100%'}>
                        <Box>
                          <CustomText fontWeight={'800'} >Chudi Victor</CustomText>
                        </Box>
                        <Box flexDirection={'row'} alignItems={'center'}>
                          <Box width={'5%'}>
                            <Image source={verified} resizeMode='cover'/>
                          </Box>
                          <Box width={'80%'}>
                            <CustomText fontSize={12}>Verified capital city development seller</CustomText>
                          </Box>
                        </Box>
                    </Box>
                   
                </Box>
                <Box>
                      <CustomText variant={'subheader'} fontSize={14}>Suggested for you</CustomText>
                </Box>
                <Box flexDirection={'row'} marginTop={'sm'} justifyContent={'space-evenly'} flexWrap={'wrap'}>
                      {
                        materials.map((mat)=>{
                          return(
                        
                          <Box width={'45%'} height={180}  borderRadius={20} borderWidth={1} borderColor={'textInputBorderColor'} key={mat.id}>
                            <Pressable onPress={()=>router.push('/dashboard/homepage/marketplace/productDetails')}>
                              <Image borderTopLeftRadius={20} borderTopRightRadius={20} style={{width:'auto', height:'45%'}} source={mat.item} resizeMode='cover'/>
                              <Box height={'55%'} padding={'md'}>
                                <CustomText fontSize={12} lineHeight={14}>{mat.header}</CustomText>
                                <CustomText fontSize={12} lineHeight={25} variant={'subheader'}>{mat.price}</CustomText>
                                <Box>
                                  <OutlineButtonColored onPress={()=>window.alert('added to cart')} label={'Add to Cart'} height={35} width={'100%'}/>
                                </Box>
                              </Box>
                            </Pressable>
                          </Box>
                          )
                        })
                      }
                      
                </Box>
                <Box alignItems={'center'} justifyContent={'center'}  height={40} marginTop={'3xl'}>
                  <Box width={'35%'} flexDirection={'row'} justifyContent={'space-around'} alignItems={'center'} >
                  <TouchableOpacity>
                       <Pressable onPress={()=>decrement()}>
                        <Box height={40} width={40} borderRadius={100} borderWidth={1.5} borderColor=  {'textInputBorderColor'} justifyContent={'center'} alignItems={'center'} >
                            <Ionicons name='remove-outline' size={25}/>                        
                        </Box>
                        </Pressable>
                    </TouchableOpacity>

                       <CustomText fontSize={20} variant={'subheader'}>{count}</CustomText>

                     <TouchableOpacity>
                       <Pressable onPress={()=>increment()}>
                        <Box height={40} width={40} borderRadius={100} borderWidth={1.5} borderColor=  {'textInputBorderColor'} justifyContent={'center'} alignItems={'center'} >
                            <Ionicons name='add-outline' size={25}/>                        
                        </Box>
                        </Pressable>
                    </TouchableOpacity>
                  </Box>
                </Box>
                
                <Box marginTop={'xl'} paddingLeft={'md'}>
                  <TouchableOpacity>
                    <PrimaryButton label='Buy Now (₦21,000)' 
                    onPress={()=>router.push('/dashboard/homepage/marketplace/cart')} width={'95%'}/>
                  </TouchableOpacity>
                </Box>
              </Box>
             
             }
              </Box>
            
            </ScrollView>  
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default propertyDetails;