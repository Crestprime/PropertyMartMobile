import React, { useState } from 'react'
import Box from '@component/general/Box'
import { Styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link, router } from 'expo-router'
import CustomText from '@component/general/CustomText'
import { Ionicons } from '@expo/vector-icons'
import { PrimaryButton } from '@component/general/CustomButton'
import { Pressable, Image } from 'react-native'
import { ScrollView } from 'tamagui'
const avatar = require('../../../assets/images/foreground/avatar.png')

export default function userReplies() {

  const reviews = [
    { id:31234, username:'Albert Flores', title:'Its the perfect blank slate to build your forever home.', review:'Excited', date:'a month ago'  },
  ]
  const replies = [
    { id:31234, user:'Capital City Development', title:'Perfect for crafting your ideal oasis or investment opportunity in a thriving area.', date:'a month ago'  },
  ]
  
  return (
    <ScrollView>
      <Box style={Styles.martContainer}alignItems={'center'} justifyContent={'center'} >
          <Box width={'90%'} height={'95%'}>
              <Box height={'60%'}>
                  <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                      <TouchableOpacity>
                          <Link href='/dashboard/Pages/home'>
                              <Ionicons 
                              name="arrow-back-outline"
                              size={25}
                              />
                          </Link>
                      </TouchableOpacity>
                  </Box>
                  <Box height={30} flexDirection={'row'}>
                      <Box width={'100%'} justifyContent={'center'}>
                        <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                            color={'black'} fontWeight={'800'}>View Replies
                        </CustomText> 
                      </Box>
                  </Box>

                 {
                  reviews.map((item)=>{
                    return(
                    <Box marginTop={'md'} height={150} key={item.id}>
                      <Box flexDirection={'row'}>
                        <Box width={'50%'} flexDirection={'row'} alignItems={'center'}>
                            <Box height={34} width={34} borderRadius={100} borderWidth={1} style={{borderColor:'grey'}}>
                              <Image source={avatar} resizeMode='cover' />
                            </Box>
                            <CustomText marginLeft={'xs'} fontSize={16} fontWeight={'800'}> {item.username}</CustomText>
                        </Box>
                          <Box width={'50%'} flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'}>
                          {/* <CustomText textDecorationLine={'underline'} fontSize={10} fontWeight={'800'} style={{color:'#2D66DD'}}>
                            <Link href='/dashboard/Pages/userReplies'>
                            {item.replies} {item.replies == 1 || 0? 'Reply':'Replies'}
                            </Link>
                          </CustomText> */}
                          </Box>
                      </Box>
                      <Box marginTop={'sm'} flexDirection={'row'} alignItems={'center'}>
                        <Pressable style={[
                        {
                           height:25, borderWidth:1,borderColor:'grey', marginLeft:2, alignItems:'center', 
                           borderRadius:15, display:'flex', justifyContent:'center',   
                        },
                          item.review === 'Sad'
                          ? { width: '15%', backgroundColor: '#F04438' }
                          : item.review === 'Fair'
                          ? { width: '15%', backgroundColor: '#7839EE' }
                          : item.review === 'Happy'
                          ? { width: '20%', backgroundColor: '#1570EF' } 
                          : item.review === 'Excited'
                          ? { width: '22%', backgroundColor: '#079455' }
                          : item.review === 'Indifferent'
                          ? { width: '25%', backgroundColor: '#E04F16' }
                          :
                          null 
                          ]}>
                            <Box width={'90%'} height={'90%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                          <CustomText fontWeight={'800'} color={'secondaryBackgroundColor'} fontSize={10}>{item.review}</CustomText> 
                            </Box>                             
                          </Pressable>
  
                          <CustomText marginLeft={'md'} style={{color:'grey'}} fontSize={12}>{item.date}</CustomText>
                      </Box>
                      <Box marginTop={'sm'} height={80}>
                        <CustomText fontSize={14} lineHeight={20}>
                          {item.title}
                        </CustomText>
                      </Box>
                    </Box>
                    )
                  })
                 }
                  {
                  replies.map((item)=>{
                    return(
                    <Box marginTop={'md'} height={150} key={item.id}>
                      <Box flexDirection={'row'}>
                        <Box width={'100%'} flexDirection={'row'} alignItems={'center'}>
                            <Box height={34} width={34} borderRadius={100} borderWidth={1} style={{borderColor:'grey'}}>
                              <Image source={avatar} resizeMode='cover' />
                            </Box>
                            <CustomText marginLeft={'xs'} fontSize={16} fontWeight={'800'}>Response from {item.user}</CustomText>
                        </Box>
                      </Box>
                      <Box marginTop={'sm'} flexDirection={'row'} alignItems={'center'}>
                          <CustomText marginLeft={'md'} style={{color:'grey'}} fontSize={12}>{item.date}</CustomText>
                      </Box>
                      <Box marginTop={'sm'} height={80}>
                        <CustomText fontSize={14} lineHeight={20}>
                          {item.title}
                        </CustomText>
                      </Box>
                    </Box>
                    )
                  })
                 }
                </Box>
                <Box height={100}>

                </Box>
              
          </Box>
      </Box>
    </ScrollView>
   
  )
}