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
import { RoundedInput } from '@component/form/RoundedInput'
import { CustomTextInput } from '@component/form/CustomInput'
import useForm from '@hooks/useForm'
import { setAddressSchema } from '@services/validation'
const avatar = require('../../../assets/images/foreground/avatar.png')

const UserReplies = () => {

  const reviews = [
    { id:31234, username:'Albert Flores', title:'Its the perfect blank slate to build your forever home.', review:'Excited', date:'a month ago'  },
  ]
  const replies = [
    { id:3111788, user:'Capital City Development', title:'Perfect for crafting your ideal oasis or investment opportunity in a thriving area.', date:'a month ago'  },
    { id:311338, user:'Capital City Development', title:'Perfect for crafting your ideal oasis or investment opportunity in a thriving area.', date:'a month ago'  },
    { id:324338, user:'Capital City Development', title:'Perfect for crafting your ideal oasis or investment opportunity in a thriving area.', date:'a month ago'  },
    { id:399338, user:'Capital City Development', title:'Perfect for crafting your ideal oasis or investment opportunity in a thriving area.', date:'a month ago'  },
    { id:306338, user:'Capital City Development', title:'Perfect for crafting your ideal oasis or investment opportunity in a thriving area.', date:'a month ago'  },
  ]
  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      country: '',
      email: '',
      state: '',
      city: '',
      street: '',
      postalCode: '',
      apartmentNo: '',
      landMark: '',
    },
    validationSchema: setAddressSchema,
  })
  
  return renderForm(
    
      <Box style={Styles.martContainer}alignItems={'center'} justifyContent={'center'} >
          <Box width={'90%'} height={'90%'}>
            <Box height={'100%'}> 
                <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                      <TouchableOpacity>
                          <Link href='/dashboard/homepage/landReviews'>
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
             <ScrollView>
                 {
                  reviews.map((item)=>{
                    return(
                    <Box marginTop={'sm'} height={150} key={item.id}>
                      <Box flexDirection={'row'}>
                        <Box width={'50%'} flexDirection={'row'} alignItems={'center'}>
                            <Box height={34} width={34} borderRadius={100} borderWidth={1} style={{borderColor:'grey'}}>
                              <Image source={avatar} resizeMode='cover' />
                            </Box>
                            <CustomText marginLeft={'xs'} fontSize={16} fontWeight={'800'}> {item.username}</CustomText>
                        </Box>
                          <Box width={'50%'} flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'}>
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
                    <Box marginTop={'sm'} height={150} key={item.id}>
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
               </ScrollView>
            </Box> 
          </Box>
           <Box height={60} width={'100%'} style={{backgroundColor:'#FCFCFD'}} justifyContent={'center'} alignItems={'center'}>
                <Box width={'90%'} height={'90%'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} >
                    <Box width={'10%'}>
                        <Box height={25} width={25} backgroundColor={'secondaryBackgroundColor'} borderRadius={100} alignItems={'center'} justifyContent={'center'} >
                        <Ionicons name='add' size={20} style={{color:'#2D66DD'}}/>
                        </Box>
                    </Box>
                    <Box width={'80%'} justifyContent={'center'} alignItems={'center'}>
                        <Box style={{marginTop:-30}} width={'100%'}>
                        <RoundedInput name='Message' placeholder='Type a message...' label=' ' isPassword={true} />
                        </Box>
                     {/* <CustomTextInput name='email' placeholder='Email' isPassword={false}  /> */}
                    </Box>
                    <Box width={'10%'} alignItems={'flex-end'}>
                        <Box height={25} width={25} backgroundColor={'secondaryBackgroundColor'} borderRadius={100} alignItems={'center'} justifyContent={'center'} >
                            <Ionicons name='mic-outline' size={20} style={{color:'#2D66DD'}}/>
                        </Box>
                    </Box>
                    </Box>
              </Box>
            </Box>
      
  )
}

export default UserReplies