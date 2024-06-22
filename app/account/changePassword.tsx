import React, {useEffect, useState} from 'react'
import { router } from 'expo-router'
import { Image, Pressable } from 'react-native'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { changePasswordSchema } from '@services/validation'
import { Styles } from '../../styles/auth/styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { SubmitButton } from '@component/form/CustomButton'
import { PrimaryButton } from '@component/general/CustomButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useMutation } from 'react-query'
import httpService from '../../utils/httpService'
import { Ionicons } from '@expo/vector-icons'
import AlertSuccess from '@component/alerts/success'
import AlertFailed from '@component/alerts/failed'
import Loader from '@component/loader'
import { getUserDetails } from '@utils/getUser'

const palmfone = require('../../assets/images/foreground/acctcreated.png')

const  ChangePassword = () => {
  const { renderForm, formState: { isValid },values } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: ''
    },
    validationSchema: changePasswordSchema,
  })

  const [user, setUserProps] = useState<any>()
  
  useEffect(() => {
    async function getUser() {
      const userDetails = await getUserDetails();
      setUserProps(userDetails);
    }
    getUser()
  }, []); 

  const [step, setStep] = useState(0);
  const [success, isSuccess] = React.useState(false)
  const [failed, isFailed] = React.useState(false)
  const [message, setMessage] = React.useState('')
//   const [loading, setIsLoading] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const Router = router
  const login = () => {
    Router.push("/auth/login") 
  }

  const turnOffAlert = () =>{
    function setFalse(){
      isFailed(false);
      isSuccess(false);
      setIsLoading(false);
     }
    const timeoutId = setTimeout(setFalse, 3000);
  }

  const token = user?.token;
  console.log(token)

  const { isLoading: Saving, mutate } = useMutation({
    mutationFn: (data: any) => httpService.post('/authentication/user/update-password', data,{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
      }
    }),
    onSuccess: (data) => {
      setStep(1)
      setIsLoading(false)
      const {message} = data.data;
      setMessage(message)
      isSuccess(true)
      console.log(data.data);
    },
    onError: (error: any) => {
     setMessage(error?.message)
     isFailed(true)
     turnOffAlert()
    },
  })

  const SaveChanges = ({data}:any) => {

    const formdata = values()
     if(formdata){
        data = {
            oldPassword: formdata.oldPassword,
            newPassword: formdata.newPassword
        }
        console.log(data)
        mutate(data)
        setIsLoading(true)
     }

};

  return renderForm(
   <>
    <Box style={[Styles.martContainer, Styles.flex]} >
      <Box style={Styles.subContainer}  marginTop={'xs'}>
        {step === 0?
        <>
        <Box height={'100%'}>
          <Box>
                <TouchableOpacity>
                  <Pressable onPress={()=>router.push('/account/')}>
                    <Ionicons name='arrow-back' size={25} />
                  </Pressable>
                </TouchableOpacity>
          </Box>  
          <Box height={'100%'} width={'100%'}>   
            <CustomText variant={'subheader'} textAlign={'left'} fontSize={26} lineHeight={25} marginTop={'xl'} 
                  color={'black'} fontWeight={'800'}>Create New Password
            </CustomText>
              <Box marginTop={'xl'} marginBottom={'xs'}>
                  <CustomTextInput name='oldPassword' placeholder='****' label='Old Password' isPassword  />
              </Box>

              <Box marginTop={'xl'} marginBottom={'xs'}>
                  <CustomTextInput name='newPassword' placeholder='****' label='New Password' isPassword isSignup  />
              </Box>

              <TouchableOpacity>
                  <Box width='100%' marginTop={'xs'} height={50} justifyContent={'center'} alignItems={'flex-end'}>
                      <SubmitButton label='Save Changes' width='100%' onSubmit={(data) => SaveChanges(data)} isLoading={isLoading} /> 
                  </Box>
              </TouchableOpacity>
          </Box>
        </Box>
        <Box height={'20%'} flexDirection={'row'} alignItems={'flex-end'}>
                    <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                        <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                            <CustomText>Hello</CustomText>
                        </Box>
                    </Box>
        </Box>
        </>
         :
         step == 1?
         <>
             <Box width={'100%'} height={'100%'}>
                  <Box height={'30%'} width={'100%'} >
                    <CustomText variant={'xs'} textAlign={'right'} fontSize={12} lineHeight={20} 
                      color={'btnBlue'} fontWeight={'800'}>
                        {/* I’ll do this later */}
                    </CustomText>
                  </Box> 
                <Box height={'70%'} width={'100%'} flexDirection={'column'} alignItems={'center'}>
                  <Box height={'20%'} paddingBottom={'xl'}>
                    <Image source={palmfone} resizeMode="cover" style={{width:100, height:100}} />
                  </Box>
                  <Box height={20}></Box>
                  <Box height={'10%'} marginTop={'xl'}>
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={20} lineHeight={25} marginTop={'sm'} 
                        color={'black'} fontWeight={'800'}>Password Reset Successful!
                    </CustomText>
                  </Box>
                  <Box height={'20%'}>
                    <CustomText variant={'xs'} textAlign={'center'} fontSize={14} lineHeight={20} 
                      color={'black'} fontWeight={'400'}>
                        Your password reset was successful. Please Login to continue.
                    </CustomText>
                  </Box>
                  <Box width={'100%'} marginTop={'xs'}>
                    <PrimaryButton onPress={()=>{login()}} label={'Login'} width={'100%'} 
                          />        
                  </Box>
                  <Box height={'60%'} flexDirection={'row'} alignItems={'flex-end'}>
                    <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                        <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                            <CustomText>Hello</CustomText>
                        </Box>
                    </Box>
                  </Box>
                </Box>
                
            </Box>
            </> 
         : null }
      </Box>
    </Box>
    {
        isLoading && (
          <>
            <Loader/>
          </>
        )
      }
      {
        success && (
          <>
           <AlertSuccess message={message}/>
          </>
        )
      }
      {
        failed && (
          <>
           <AlertFailed message={message}/>
          </>
        )
      }
   </>
  )
}


export default ChangePassword