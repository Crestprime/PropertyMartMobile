import React, { useState } from 'react'
import Box from '@component/general/Box'
import { Styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link, router } from 'expo-router'
import CustomText from '@component/general/CustomText'
import { Ionicons } from '@expo/vector-icons'
import { PrimaryButton} from '@component/general/CustomButton'
import { Pressable, Image } from 'react-native'
import { ScrollView } from 'tamagui'
// import { RoundedInput } from '@component/form/RoundedInput'
// import { CustomTextInput } from '@component/form/CustomInput'
import useForm from '@hooks/useForm'
import { setAddressSchema } from '@services/validation'
import { MessageBox } from '@component/form/MessageBox'
import { OutlineButton } from '@component/general/OutlineButton'
const avatar = require('../../../assets/images/foreground/avatar.png')

const UserReplies = () => {

   const [sad, setSad] = useState(false)
   const [fair, setFair] = useState(false)
   const [indifferent, setIndifferent] = useState(false)
   const [happy, setHappy] = useState(false)
   const [excited, setExcited] = useState(true)

   const [submit, setSubmit] = useState(false)
   const [isSubmit, setIsSubmit] = useState(false)
   const [addFeedBack, setFeedBack] = useState(true)
   const [feedSelect, setFeedSelect] = useState({
    slow: false,
    easy: false,
    fast: false,
    difficult: false,
  });

   const feedbacks = [
    { id:11787, feedback:'Sad', sad:sad },
    { id:21113, feedback:'Fair', fair:fair },
    { id:31234, feedback:'Indifferent', indifferent:indifferent },
    { id:42345, feedback:'Happy', happy:happy},
    { id:52345, feedback:'Excited', excited:excited},
  ]
   const morefeedbacks = [

    { id:11727, feedback:'Slow', slow:feedSelect.slow },
    { id:24113, feedback:'Easy', easy:feedSelect.easy },
    { id:32234, feedback:'Fast', fast:feedSelect.fast },
    { id:40345, feedback:'Difficult', difficult:happy},
  ]
   const header = [
    { id:11727, title:'How was the transaction process?' },
    { id:19247, title:'How was the communication with the seller or agent?' },
    { id:16677, title:'Does this property worth your money?' },
    { id:16637, title:'How satisfied are you with the location and surroundings?' },
    { id:16637, title:'How was the legal and paperwork handling?' },
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

  const toggleState = (feedback: any) => {
    switch (feedback) {
      case 'Sad':
        setSad(!sad);
        break;
      case 'Fair':
        setFair(!fair);
        break;
      case 'Indifferent':
        setIndifferent(!indifferent);
        break;
      case 'Happy':
        setHappy(!happy);
        break;
      case 'Excited':
        setExcited(!excited);
        break;
      default:
        break;
    }
  };

  const closeMoreFeedback = () => {
    setIsSubmit(true)
    setFeedBack(false)
  } 

  // const toggleFeeds = (key) => {
  //   setFeedbacks((prevFeedbacks) => ({
  //     ...prevFeedbacks,
  //     [key]: !prevFeedbacks[key],
  //   }));
  // };
  
  return renderForm(
    
      <Box style={Styles.martContainer}alignItems={'center'} justifyContent={'center'} >
          {!addFeedBack? 
           <>
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
                                <Pressable onPress={() => toggleState(item.feedback)} style={[
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
                    <PrimaryButton onPress={()=>setSubmit(true)} label={'Submit'} width={''}/>
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
          </>
          : 
          <>
            <Box width={'90%'} height={'95%'}>
            <Box height={'100%'}> 
                <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                      <TouchableOpacity>
                          <Pressable onPress={()=>closeMoreFeedback()}>
                              <Ionicons  
                                 name="close"
                              size={25}
                              />
                          </Pressable>
                      </TouchableOpacity>
                </Box>
                <Box height={30} flexDirection={'row'}>
                      <Box width={'100%'} justifyContent={'center'}>
                        <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                            color={'black'} fontWeight={'800'}>Give more feedbacks
                        </CustomText> 
                      </Box>
                </Box>
                <CustomText lineHeight={20} fontSize={14} style={{color:'#344054'}}>
                  Your reviews are important to us!
                </CustomText>
                <Box marginTop={'xl'} width={'100%'} height={'65%'} >
                  <ScrollView>
                      {header.map((title)=>{
                        return(
                          <>
                          <Box height={'25%'} style={{backgroundColor:'#F9FAFB'}} marginBottom={'md'}>
                            <Box height={'40%'} width={'100%'} paddingRight={'md'} paddingLeft={'md'} justifyContent={'center'} key={title.id}>
                              <CustomText textAlign={'center'} fontSize={14}>{title.title}</CustomText>
                            </Box>
                              <Box height={'60%'} width={'100%'} alignItems={'center'} justifyContent={'center'} flexDirection={'row'} flexWrap={'wrap'}>
                                {
                                  morefeedbacks.map((item)=>{
                                  return(
                                  <>
                                    <Pressable  key={item.id} onPress={() =>window.alert('be strong')} style={[
                                            item.slow === true? {backgroundColor:'#F04438'} :
                                            item.easy === true? {backgroundColor:'#7839EE'} :
                                            item.fast === true? {backgroundColor:'#E04F16'} :
                                            item.difficult === true? {backgroundColor:'#1570EF'} :
                                            // item.excited === true? {backgroundColor:'#079455' } :
                                            null,
                                            {
                                              height:30, borderWidth:1,borderColor:'grey', marginTop:10,marginLeft:6, alignItems:'center', 
                                              borderRadius:15, display:'flex', justifyContent:'center',    
                                            },
                                              item.feedback === 'Slow'
                                              ? { width: '18%' }
                                              : item.feedback === 'Easy'
                                              ? { width: '18%' }
                                              : item.feedback === 'Fast'
                                              ? { width: '20%' }
                                              : item.feedback === 'Difficult'
                                              ? { width: '25%' } 
                                            
                                              :
                                              null,
                                              
                                              
                                              ]}>
                                                <Box width={'90%'} height={'90%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                                  <CustomText fontWeight={'800'} style={[item.slow || item.easy || item.fast || item.difficult === true?{color:'#FFFFFF'}:{color:'black'}]} fontSize={10}>{item.feedback}</CustomText> 
                                                </Box>                             
                                    </Pressable>
                                    </>
                                    )
                                  })}
                              </Box>
                      </Box>
                          </>
                        )
                      })}
                  </ScrollView>
                </Box>
                <Box marginTop={'xl'}>
                  <TouchableOpacity>
                    <PrimaryButton onPress={()=>setSubmit(true)} label={'Submit'} width={''}/>
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
            
          </>
           }
           
          {
            submit &&
          <Box style={Styles.sidebar}>
            <Box width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'flex-end'} style={{ backgroundColor:'#000000c0'}}>
                  <Box width={'95%'} height={'40%'} justifyContent={'center'} alignItems={'center'} marginBottom={'lg'} borderRadius={14} backgroundColor={'secondaryBackgroundColor'}>
                    <Box width={'90%'} height={'90%'} justifyContent={'center'}>
                      <Box>
                        <Ionicons name='checkmark-circle-outline' color={'#079455'} size={25}/>
                      </Box>
                      <Box marginTop={'md'}>
                        <CustomText variant='header' fontSize={16} lineHeight={20}>Feedback Submited</CustomText>
                      </Box>
                      <Box marginTop={'sm'}>
                        <CustomText fontSize={14} style={{color:'grey'}}>Thanks for your feedback! Feel Free to give more feedbacks</CustomText>
                      </Box>
                        <Box marginTop={'xl'}>
                          <PrimaryButton onPress={undefined} label='Give more feedback' width='100%'/>
                        </Box>
                        <Box marginTop={'md'}>
                          <OutlineButton onPress={()=>setSubmit(false)} label='Close' width='100%'/>
                        </Box>
                    </Box>
                  </Box>   
            </Box>
          </Box>
          }
           {
            isSubmit &&
          <Box style={Styles.sidebar}>
            <Box width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'flex-end'} style={{ backgroundColor:'#000000c0'}}>
                  <Box width={'95%'} height={'30%'} justifyContent={'center'} alignItems={'center'} marginBottom={'lg'} borderRadius={14} backgroundColor={'secondaryBackgroundColor'}>
                    <Box width={'90%'} height={'90%'} justifyContent={'center'}>
                      <Box>
                        <Ionicons name='checkmark-circle-outline' color={'#079455'} size={25}/>
                      </Box>
                      <Box marginTop={'md'}>
                        <CustomText variant='header' fontSize={16} lineHeight={20}>Feedback Submited</CustomText>
                      </Box>
                      <Box marginTop={'sm'}>
                        <CustomText fontSize={14} style={{color:'grey'}}>Thanks for your feedback! We appreciate</CustomText>
                      </Box>
                        <TouchableOpacity>
                          <Box marginTop={'xl'}>
                            <PrimaryButton onPress={()=>router.push('/dashboard/Pages/home')} label='Back to home' width='100%'/>
                          </Box>
                        </TouchableOpacity>
                      </Box>
                  </Box>   
            </Box>
          </Box>
          }
          
      </Box>
      
  )
}

export default UserReplies