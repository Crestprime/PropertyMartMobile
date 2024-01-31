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
import { OutlineButtonColored } from '@component/general/OutlineButtonColored'

const cement = require('../../../../assets/images/foreground/cement.png')
const dangote = require('../../../../assets/images/foreground/dangote.png')
const painter = require('../../../../assets/images/foreground/painter.png')
const tiles = require('../../../../assets/images/foreground/tiles.png')

const Materials = () => {

    const materials = [
        { 
          id: 1242, item:dangote ,
          header:'Dangote’s Cement', price:'500,000'
        },
        { 
          id: 1234, item:painter ,
          header:'Dangote’s Cement', price:'500,000'
        },  
        { 
          id: 1423, item:cement ,
          header:'Dangote’s Cement', price:'500,000'
        },  
        { 
          id: 1432, item:dangote ,
          header:'Dangote’s Cement', price:'500,000'
        },  
        { 
          id: 1436, item:tiles ,
          header:'Dangote’s Cement', price:'500,000'
        },  
        { 
          id: 1439, item:cement ,
          header:'Dangote’s Cement', price:'500,000'
        },  
       
      ];

      const propertyDetails = () => {
        router.push('/dashboard/homepage/home/propertyDetails',)
     }
  return (
            
             <ScrollView style={{marginTop:60}}>
                  <Box flexDirection={'row'} marginTop={'xl'} justifyContent={'space-evenly'} flexWrap={'wrap'}>
                      {
                        materials.map((mat)=>{
                          return(
                        
                          <Box width={'45%'} height={180} marginTop={'md'} borderRadius={20} borderWidth={1} borderColor={'textInputBorderColor'} key={mat.id}>
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
              </ScrollView>
            
          )
        }

export default Materials