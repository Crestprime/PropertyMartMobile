import { Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { InspectionSchema } from '@services/validation'
import { Styles } from '../styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link, router } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Checkbox, ScrollView, Separator } from 'tamagui'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


const ScheduleInspection = () => {
  
  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      date: '',
      time: '',
      notes: '',
    },
    validationSchema: InspectionSchema,
  })

  const handleSubmit = (data: any) => {
    window.alert('hullo')
  }
 

  return renderForm(
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
        <Box width={'90%'} height={'90%'}>
                <Box marginTop={'xl'} height={40} justifyContent={'center'} >
                    <TouchableOpacity>
                        <Link href={'/dashboard/homepage/home/propertyDetails'}>
                            <Ionicons 
                            name="arrow-back-outline"
                            size={25}
                            />
                       </Link>
                    </TouchableOpacity> 
                </Box>
                <Box height={30}>
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={16} lineHeight={25} 
                            color={'black'} fontWeight={'800'}>Schedule Inspection
                    </CustomText> 
                </Box>
                <Box height={30}>
                    <CustomText textAlign={'left'} fontSize={14} lineHeight={20}  marginTop={'xs'}
                        color={'black'} fontWeight={'400'}>
                       Select date and time for inspection
                    </CustomText>
                </Box>
                <Box marginTop={'sm'}>
                  
                      <CustomTextInput name='date' placeholder='Date' label='Schedule Inspecton' isPassword={false}  />
                        <Box marginBottom={'sm'} />

                        <CustomTextInput name='time' placeholder='Time' label='Time' isPassword={false}  />
                        <Box marginBottom={'sm'} />

                        <CustomTextInput name='state' placeholder='State' label='State' isPassword={false} 
                        /><Box marginBottom={'sm'} />
                   
                        <TouchableOpacity>
                          <Box marginTop={'lg'}>
                             <SubmitButton label='Submit' width='100%' onSubmit={(data) => handleSubmit(data)} />
                          </Box>
                        </TouchableOpacity>
                </Box>
                
        </Box>
        <Box height={'5%'} flexDirection={'row'} alignItems={'flex-end'} justifyContent={'center'}> 
            <Box height={5} width={'100%'} flexDirection={'row'} justifyContent={'center'} >
                <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                <CustomText>Hello</CustomText>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
export default ScheduleInspection;