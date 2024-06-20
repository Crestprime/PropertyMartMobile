import {  Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { proposalSchema } from '@services/validation'
import { Styles } from 'styles/setup/styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { SubmitButton } from '@component/form/CustomButton'
import { Checkbox, ScrollView, Separator } from 'tamagui'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { getUserDetails } from '@utils/getUser'
import { router } from 'expo-router'
import Success from '@component/modals/Success'
import Loader from '@component/loader'


const SendProposal = ({ setStep1,isSuccess, isFailed, setMessage }:any) => {
  
  useEffect(() => {
    async function getUser() {
      const userDetails = await getUserDetails();
      setUserProps(userDetails);
    }
    getUser()
  }, []); 
  
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUserProps] = useState<any>()
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = React.useState(false);


  const modalSubTitle = "Your Land has been successfully uploaded. It's now live and ready for potential buyers"

  const turnOffAlert = () =>{
    function setFalse(){
      isFailed(false);
      isSuccess(false);
      setIsLoading(false);
     }
    const timeoutId = setTimeout(setFalse, 3000);
  }

  const { renderForm, formState: { isValid }, values } = useForm({
    defaultValues: {
    title: '',
    description: '',
    location: '',
    budget:'',
    duration: '',
    startDate: '',
    contactName: '',
    contactEmail: '',
    },
    validationSchema: proposalSchema,
  })

  const token = user?.token
 
  console.log('token', token, )
  
  const { mutate } = useMutation({
    mutationFn: (data: any) => httpService.post(`/proposal/create`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
  }),
    onSuccess: (data) => {
      console.log(data.data);
      console.log(data)
      const email = data.data.data.email
      const {message} = data.data
      setModal(true)

      console.log(email)

       setMessage(message)
       isSuccess(true)
       turnOffAlert()

    },
    onError: (error: any) => {
      const message = error?.message
      setMessage(message)
      isFailed(true)
      turnOffAlert()

    },
  })

  const resetForm  = () => {
    // formValues.reset()
  }


  const handleSubmit = async (data: any) => {
    const formvalues = values();
    let { budget, duration } = formvalues;
    
    budget = Number(budget);
    
    // Add the converted budget back to formvalues
    if(data){
      const data = { ...formvalues, budget};
      // Set loading state and mutate data
      setIsLoading(true);
      mutate(data);
    }
  };
 

  return renderForm(
    <>
      <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
          <Box width={'90%'} height={'90%'}>
          <ScrollView>
          <Box marginTop={'xl'} height={'auto'} justifyContent={'center'} >
                      <TouchableOpacity>
                          <Pressable onPress={()=> router.push('/dashboard/homepage/construction/')}>
                              <Ionicons 
                              name="arrow-back-outline"
                              size={25}
                              />
                        </Pressable>
                      </TouchableOpacity> 
                  </Box>
                  <Box height={30} marginTop={'lg'}>
                      <CustomText variant={'subheader'} textAlign={'left'}
                              color={'black'} >Send Proposal
                      </CustomText> 
                  </Box>
                
                
                  <Box marginTop={'lg'} marginBottom={'xl'}>
                    
                        <CustomTextInput name='title' placeholder='Project Title' label='Project Title' isPassword={false}  />
                          <Box marginBottom={'sm'} />

                          <CustomTextInput name='description' placeholder='Description ' label='Project Description' isPassword={false}  />
                          <Box marginBottom={'sm'} />

                          <CustomTextInput name='location' placeholder='Location' label='Location' isPassword={false}  />
                          <Box marginBottom={'sm'} />

                          <CustomTextInput name='budget' placeholder='Budget' label='Budget' isPassword={false} 
                          /><Box marginBottom={'sm'} />


                          <CustomTextInput name='startDate' placeholder='Start Date' label='Prefered Start Date' isPassword={false} 
                          /><Box marginBottom={'sm'} />


                            <CustomTextInput name='duration' placeholder='Duration' label='Projected Completion Date' isPassword={false} 
                          /><Box marginBottom={'sm'} />

                          <CustomTextInput name='contactName' placeholder='Contact Name' label='Contact Name' isPassword={false} 
                          /><Box marginBottom={'sm'} />

                          <CustomTextInput name='contactEmail' placeholder='Contact Email' label='Contact Email' isPassword={false} 
                          /><Box marginBottom={'sm'} />

                          <TouchableOpacity>
                            <SubmitButton label='Save & Continue' width='100%' onSubmit={(data) => handleSubmit(data)} isLoading={isLoading} />
                          </TouchableOpacity>
                    </Box>    
                    <Box height={30} alignItems={'center'} justifyContent={'flex-end'}>
                      <Box height={5} width={'100%'} alignItems={'center'} justifyContent={'center'} >
                          <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                              <CustomText>Hello</CustomText>
                          </Box>
                      </Box>
                  </Box>
                    </ScrollView>      
            </Box>
      </Box>
      {
        modal && (
          <>
           <Success resetForm={resetForm} setModal={setModal} title={'Proposal sent'} label={'Send another Proposal'} subtitle={modalSubTitle}/>
          </>
        )
      }
      {
        loading && (
          <Loader/>
        )
      }
    </>
  )
}
export default SendProposal;