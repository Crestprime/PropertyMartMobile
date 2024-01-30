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

export default function setupAccount() {

  const ratings = [
    { id:14536, title:'Transactions', rate:'4.5' },
    { id:21764, title:'Communication', rate:'2.5' },
    { id:31725, title:'Property Value', rate:'4.5' },
    { id:47891, title:'Location', rate:'2.0' },
    { id:55564, title:'Legal/Paper Work', rate:'1.0' },
  ]

  const reviews = [
    { id:11787, username:'Chimezie Stefan', title:'This Property is a true masterpiece that combines luxurious living with the beauty of its surroundings.', review:'Fair', replies: 3, date:'a month ago' },
    { id:21113, username:'Marvin McKinney', title:'The seamless buying process and friendly community make it a dream come true.', review:'Happy', replies: 1, date:'a month ago' },
    { id:31234, username:'Albert Flores', title:'Its the perfect blank slate to build your forever home.', review:'Excited', replies: 13, date:'a month ago'  },
    { id:42345, username:'Ralph Edwards', title:'Average land, lacks charm. Minimal amenities, uninspiring surroundings. Adequate for basic needs, but lacks appeal.', review:'Indifferent', replies: 14, date:'a month ago'  },
    { id:52345, username:'Wade Warren', title:'Regrettably, this property falls short of expectations. ', review:'Sad', replies: 1, date:'a month ago' },
  ]

  
  return (
    
      <Box style={Styles.martContainer}alignItems={'center'} justifyContent={'center'} >
          <Box width={'90%'} height={'95%'}>
              <Box height={'100%'}>
                  <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                      <TouchableOpacity>
                          <Link href='/dashboard/homepage/propertyDetails'>
                              <Ionicons 
                              name="arrow-back-outline"
                              size={25}
                              />
                          </Link>
                      </TouchableOpacity>
                  </Box>
                  <Box height={30} flexDirection={'row'}>
                      <Box width={'60%'} justifyContent={'center'}>
                        <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                            color={'black'} fontWeight={'800'}>Customer Feedback
                        </CustomText> 
                      </Box>
                      <Box width={'40%'} justifyContent={'center'}>
                        <PrimaryButton label='Give Feedback' onPress={()=>router.push('/dashboard/homepage/giveFeedback')} width={'100%'}/>
                      </Box>
                  </Box>
                  <Box marginTop={'xs'}>
                    <CustomText  fontWeight={'600'} fontSize={30}>4.5/<CustomText style={{color:'grey'}} fontSize={30}>5</CustomText><CustomText fontSize={12}> 24 ratings</CustomText></CustomText>
                  </Box>
                  <ScrollView >
                      <Box marginTop={'md'} >
                        {
                          ratings.map((item)=>{
                            return(
                              <>
                              <Box flexDirection={'row'} alignItems={'center'} key={item.id} marginTop={'md'}>
                                  <Box width={'40%'} justifyContent={'center'}>
                                    <CustomText fontSize={14}>{item.title}</CustomText>
                                  </Box>
                                  {
                                    item.rate === '1.0'? 
                                    <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                        <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'10%'} ></Box>
                                    </Box> 
                                      :
                                      item.rate === '1.5'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'15%'} ></Box>
                                      </Box> 
                                      :
                                      item.rate === '2.0'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'20%'} ></Box>
                                      </Box> 
                                      :
                                      item.rate === '2.5'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'25%'} ></Box>
                                      </Box> 
                                      :
                                      item.rate === '3.0'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'30%'} ></Box>
                                      </Box>
                                      :
                                      item.rate === '3.5'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'35%'} ></Box>
                                      </Box> 
                                      :
                                      item.rate === '4.0'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'40%'} ></Box>
                                      </Box>  
                                      :
                                      item.rate === '4.5'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'45%'} ></Box>
                                      </Box>
                                      :
                                      item.rate === '5.0'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'50%'} ></Box>
                                      </Box>
                                      :
                                      item.rate === '5.5'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'55%'} ></Box>
                                      </Box>
                                      :
                                      item.rate === '6.0'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'60%'} ></Box>
                                      </Box>
                                      :
                                      item.rate === '6.5'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'65%'} ></Box>
                                      </Box>
                                      :
                                      item.rate === '7.0'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'70%'} ></Box>
                                      </Box>
                                      :
                                      item.rate === '7.5'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'75%'} ></Box>
                                      </Box>
                                      :
                                      item.rate === '80'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'80%'} ></Box>
                                      </Box>
                                      :
                                      item.rate === '8.5'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'85%'} ></Box>
                                      </Box>
                                      :
                                      item.rate === '9.0'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'90%'} ></Box>
                                      </Box>
                                      :
                                      item.rate === '9.5'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'95%'} ></Box>
                                      </Box>
                                      :
                                      item.rate === '10'? 
                                      <Box width={'50%'} style={{backgroundColor:'#F2F4F7',borderWidth:0.5, borderRadius:2, borderColor:'#2D66DD'}} height={4} justifyContent={'center'}>
                                          <Box backgroundColor={'primaryColor'} height={4} borderRadius={2} width={'100%'} ></Box>
                                      </Box>
                                      : null                              
                                  }
                                  
                                  <Box width={'10%'} alignItems={'flex-end'} justifyContent={'center'}>
                                    <CustomText fontSize={14}>{item.rate}</CustomText>
                                  </Box>
                              </Box>
                              </>
                            )
                          })
                        }
                      </Box>
                      <Box marginTop={'lg'} marginBottom={'xs'}>
                        <CustomText fontSize={12} fontWeight={'800'}>Land Reviews<CustomText style={{color:'grey'}} fontSize={10}>(24)</CustomText> </CustomText>
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
                                <CustomText textDecorationLine={'underline'} fontSize={10} fontWeight={'800'} style={{color:'#2D66DD'}}>
                                  <Link href='/dashboard/homepage/userReplies'>
                                  {item.replies} {item.replies == 1 || 0? 'Reply':'Replies'}
                                  </Link>
                                </CustomText>
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
                
                  </ScrollView>
              </Box>
          </Box>
      </Box>
   
  )
}