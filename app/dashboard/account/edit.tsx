import { View, Text, Pressable, useWindowDimensions } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomHeader from '@component/general/CustomHeader'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { editProfileSchema } from '@services/validation'
import { CustomTextInput } from '@component/form/CustomInput'
import { SubmitButton } from '@component/form/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'

const EditProfile = () => {
    const { height } = useWindowDimensions();
    const { renderForm } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
        validationSchema: editProfileSchema
    })

  return renderForm(
    <Box flex={1} padding="md">
        <CustomHeader title='Account' />

       <ScrollView style={{ minHeight: height, flex: 1 }} contentContainerStyle={{ paddingBottom: 200 }}>
       <Box width='100%' flexDirection={'row'} marginTop={'3xl'} alignItems={'center'}>
            <Box width={100} height={100} borderRadius={50} bg='lightGrey' />
            <Pressable style={{ width: 'auto', height: 40, borderRadius: 10, borderWidth: 1, borderColor: 'lightgrey', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, marginLeft: 20}}>
                <CustomText variant={'medium'} fontSize={14}>Change Picture</CustomText>
            </Pressable>
        </Box>

        <Box width={'100%'} flexDirection={'row'} marginVertical={'md'} justifyContent={'space-between'}>
            <Box width={'45%'}>
                <CustomTextInput name='firstName' isPassword={false} placeholder='' label='First Name' />
            </Box>

            <Box width={'45%'}>
                <CustomTextInput name='lastName' isPassword={false} placeholder='' label='Last Name' />
            </Box>
        </Box>

        <CustomTextInput name='email' placeholder='' label='Email' />
        <Box width={'100%'} flexDirection={'row'}>
            <CustomText variant={'xs'}>To change your email contact</CustomText>
            <CustomText variant={'xs'} color={'primaryColor'}> support@propertymart</CustomText>
        </Box>
        <Box marginBottom={'md'} />
        <CustomTextInput name='phone' placeholder='' label='phone' />
        <Box marginBottom={'2xl'} />
        <SubmitButton onSubmit={(data) => console.log(data)} label='Update' width='100%' />
       </ScrollView>

    </Box>
  )
}

export default EditProfile