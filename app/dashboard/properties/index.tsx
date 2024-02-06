import { Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { InspectionSchema } from '@services/validation'
import { Styles } from './styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link, router } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Checkbox, ScrollView, Separator } from 'tamagui'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { OutlineButton } from '@component/general/OutlineButton'
import { ErrorButton } from '@component/general/ErrorButton'
import { PrimaryButton } from '@component/general/CustomButton'

const prop = require('../../../assets/images/foreground/prop.png')
const del = require('../../../assets/images/foreground/delete.png')

const location = require('../../../assets/images/foreground/Icon.png')
const verified = require('../../../assets/images/foreground/Verified.png')



const Index = () => {
  // const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [property, setProperty] = useState(true);
  const [delet, setDelete] = useState(false)
  // const [count, setCount] = useState(0)
  
  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      date: '',
      time: '',
      notes: '',
    },
    validationSchema: InspectionSchema,
  })

  const cardImg = [
    {
      id: 1, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705890068/card_pwrye9.png',
      header: 'Land at Ludgbe', sqm: '465', subheader: 'Capital City Development', text: 'Ludgbe-Abuja, Nigeria'
    },
    {
      id: 2, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705890068/card_pwrye9.png',
      header: 'Land at Umagwa', sqm: '445', subheader: 'Capital City Development', text: 'Port-Harcourt, Nigeria'
    },
    {
      id: 3, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705890068/card_pwrye9.png',
      header: 'Land at Ikwere road', sqm: '567', subheader: 'Capital City Development', text: 'Port-Harcourt, Nigeria'
    },
    // {
    //   id: 4, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1705890068/card_pwrye9.png',
    //   header: 'Land at Ikwere road', sqm: '567', subheader: 'Capital City Development', text: 'Port-Harcourt, Nigeria'
    // }

  ];

  const propertyDetails = () => {
    router.push('/dashboard/homepage/home/propertyDetails',)
  }

  return renderForm(
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
        <Box width={'90%'} height={'90%'} >
                <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                    <TouchableOpacity>
                        <Link href={'/dashboard/homepage/marketplace/productDetails'}>
                            <Ionicons 
                            name="arrow-back-outline"
                            size={25}
                            />
                       </Link>
                    </TouchableOpacity> 
                </Box>
                <Box height={30}>
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                            color={'black'} fontWeight={'800'}>My Property
                    </CustomText> 
                </Box>  
                {
                    !property?
                    <>
                        <Box height={'60%'} alignItems={'center'} justifyContent={'center'} >
                            <Box height={'40%'} width={'80%'} alignItems={'center'}>
                                <Image source={prop} resizeMode='cover'/>
                                <CustomText fontSize={16} paddingTop={'2xl'} fontWeight={'800'}>No Property yet</CustomText>

                                <CustomText fontSize={12} paddingTop={'sm'} paddingBottom={'md'} paddingLeft={'md'} textAlign={'center'} paddingRight={'md'}>You don't have anything Property yet, but we'll direct you to where you can purchase properties.</CustomText>
                               
                                    <Box width={'50%'} height={50} marginTop={'md'} justifyContent={'center'} alignItems={'center'} >
                                          <PrimaryButton label='Buy Property' onPress={()=>window.alert('hullo')} width={'100%'}/>
                                    </Box>  
                                
                            </Box>
                        </Box>
                        <Box height={'30%'} alignItems={'center'} justifyContent={'flex-end'}>
                            <Box height={5} width={'100%'} alignItems={'center'} justifyContent={'center'} >
                                <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                                    <CustomText>Hello</CustomText>
                                </Box>
                            </Box>
                        </Box>
                    </>
                    : 
                    <Box>
                      <Box height={'95%'}>
                      <ScrollView>
                        <Box height={800} marginBottom={'xl'}>
                            {cardImg?.map((image) => (
                            
                                <Pressable key={image?.id} android_ripple={{ color: '#000000c0' }} style={[Styles.slide1,{alignItems:'center'}]} onPress={() => propertyDetails()}>
                                <Image source={{ uri: image?.uri }} style={Styles.image1} />
                                  <Box style={Styles.content} backgroundColor={'secondaryBackgroundColor'}>
                                  <Box width={'100%'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                                    <Box width={'90%'} height={130} justifyContent={'center'}>
                                      <Box>
                                        <Box flexDirection={'row'}>
                                          <Box width={'50%'} flexDirection={'row'}>
                                            <CustomText variant={'subheader'} fontSize={16}>{image?.header}</CustomText>
                                            <Box justifyContent={'center'} padding={'xs'}>
                                              <Image source={verified} resizeMode="cover" />
                                            </Box>
                                          </Box>
                                          <Box width={'50%'} alignItems={'flex-end'}>
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
                        </Box>
                      </ScrollView>
                         
                          {/* <Box width={'20%'} alignItems={'flex-end'}>
                            
                              <TouchableOpacity>
                                <Box borderRadius={80} borderWidth={0} justifyContent={'center'} alignItems={'center'} height={40} width={40} style={{backgroundColor:'#FEF3F2'}}>
                                    <Pressable onPress={()=>setDelete(true)}>
                                      <Image source={del} resizeMode='contain'/>
                                    </Pressable>
                                </Box>
                              </TouchableOpacity>
                          </Box> */}
                        </Box>
                      </Box>
                      
                   
                }
                
        </Box>
        {
            delet &&
          <Box style={Styles.sidebar}>
            <Box width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'flex-end'} style={{ backgroundColor:'#000000c0'}}>
                  <Box width={'95%'} height={'40%'} justifyContent={'center'} alignItems={'center'} marginBottom={'lg'} borderRadius={14} backgroundColor={'secondaryBackgroundColor'}>
                    <Box width={'90%'} height={'90%'} justifyContent={'center'}>
                        <Box marginTop={'sm'}>
                                <Box borderRadius={80} borderWidth={0} justifyContent={'center'} alignItems={'center'} height={40} width={40} style={{backgroundColor:'#FEF3F2'}}>
                                      <Image source={del} resizeMode='contain' style={{width:'50%'}}/>   
                                </Box>
                      </Box>
                      <Box marginTop={'xs'}>
                        <CustomText variant='header' fontSize={16} lineHeight={20}>Remove </CustomText>
                      </Box>
                      <Box marginTop={'xs'}>
                        <CustomText fontSize={14} style={{color:'grey'}}>Do you want to remove “Deform Bar Steel Rod” from cart?</CustomText>
                      </Box>
                        <Box marginTop={'sm'}>
                          <ErrorButton onPress={()=>setDelete(false)} label='Yes, remove' width='100%' />
                        </Box>
                        <Box marginTop={'sm'}>
                          <OutlineButton onPress={()=>setDelete(false)} label='No, keep it' width='100%'/>
                        </Box>
                    </Box>
                  </Box>   
            </Box>
          </Box>
          }
    </Box>
  )
}
export default Index;