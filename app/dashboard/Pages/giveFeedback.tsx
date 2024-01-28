import React, { useState } from 'react'
import Box from '@component/general/Box'
import { Styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link, router } from 'expo-router'
import CustomText from '@component/general/CustomText'
import { Ionicons } from '@expo/vector-icons'
import { PrimaryButton} from '@component/general/CustomButton'
import { Pressable, Image } from 'react-native'
// import { ScrollView } from 'tamagui'
// import { RoundedInput } from '@component/form/RoundedInput'
// import { CustomTextInput } from '@component/form/CustomInput'
import useForm from '@hooks/useForm'
import { setAddressSchema } from '@services/validation'
import { MessageBox } from '@component/form/MessageBox'
const avatar = require('../../../assets/images/foreground/avatar.png')

const UserReplies = () => {

   const [sad, setSad] = useState(false)
   const [fair, setFair] = useState(false)
   const [indifferent, setIndifferent] = useState(false)
   const [happy, setHappy] = useState(false)
   const [excited, setExcited] = useState(true)

   const feedbacks = [
    { id:11787, feedback:'Sad', sad:sad },
    { id:21113, feedback:'Fair', fair:fair },
    { id:31234, feedback:'Indifferent', indifferent:indifferent },
    { id:42345, feedback:'Happy', happy:happy},
    { id:52345, feedback:'Excited', excited:excited},
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
          <Box width={'90%'} height={'95%'}>
            <Box height={'100%'}> 
                <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                      <TouchableOpacity>
                          <Link href='/dashboard/Pages/landReviews'>
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
                            color={'black'} fontWeight={'800'}>Give Feedback
                        </CustomText> 
                      </Box>
                </Box>
                <CustomText lineHeight={20} fontSize={14} style={{color:'#344054'}}>Reviews are public and include your account information</CustomText>
                <Box marginTop={'xl'} >
                  <CustomText textAlign={'center'} lineHeight={25}>How do you feel generally after purchasing this property?</CustomText>
                </Box>
                <Box justifyContent={'center'} alignItems={'center'} height={100} marginTop={'xl'}>
                    <Box width={'60%'} height={'90%'} flexDirection={'row'} justifyContent={'center'} flexWrap={'wrap'}>
                      {
                        feedbacks.map((item)=>{
                            return(
                                <>
                                <Pressable style={[
                                    item.sad === true? {backgroundColor:'#F04438'} :
                                    item.fair === true? {backgroundColor:'#7839EE'} :
                                    item.indifferent === true? {backgroundColor:'#E04F16'} :
                                    item.happy === true? {backgroundColor:'#1570EF'} :
                                    item.excited === true? {backgroundColor:'#079455' } : null,
                                    {
                                       height:30, borderWidth:1,borderColor:'grey', marginTop:10,marginLeft:6, alignItems:'center', 
                                       borderRadius:15, display:'flex', justifyContent:'center',    
                                    },
                                      item.feedback === 'Sad'
                                      ? { width: '25%' }
                                      : item.feedback === 'Fair'
                                      ? { width: '25%' }
                                      : item.feedback === 'Indifferent'
                                      ? { width: '40%' }
                                      : item.feedback === 'Happy'
                                      ? { width: '30%' } 
                                      : item.feedback === 'Excited'
                                      ? { width: '30%' }
                                      :
                                      null,
                                      
                                      
                                      ]}>
                                        <Box width={'90%'} height={'90%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                          <CustomText fontWeight={'800'} style={[item.sad || item.fair || item.excited || item.happy || item.indifferent === true?{color:'#FFFFFF'}:{color:'black'}]} fontSize={10}>{item.feedback}</CustomText> 
                                        </Box>                             
                                </Pressable>
                                </>
                            )
                        })
                      }
                    </Box>
                </Box>
                <Box marginTop={'xs'}>
                    <CustomText variant={'subheader'} fontSize={10}>Any Additional Information (optional)</CustomText>
                     <Box  justifyContent={'center'} style={{marginTop:0}} height={80}>
                     <MessageBox name='Message' placeholder='Type a message...' label=' ' isPassword={false}/>   
                    </Box>
                </Box>
                <Box marginTop={'8xl'}>
                  <TouchableOpacity>
                    <PrimaryButton onPress={()=>console.log('alert')} label={'Submit'} width={''}/>
                  </TouchableOpacity>
                </Box>
            </Box> 
          </Box>
          <Box flexDirection={'row'} alignItems={'flex-end'}>
          <Box height={5} width={'100%'} flexDirection={'row'} justifyContent={'center'} >
            <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
              <CustomText>Hello</CustomText>
            </Box>
          </Box>
        </Box>
          
      </Box>
      
  )
}

export default UserReplies