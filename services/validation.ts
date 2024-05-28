import { z } from 'zod'
const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;

const signupSchema = z.object({
  firstName: z.string().min(3, 'First name is required'),
  lastName: z.string().min(3, 'Last name is required'),
  phone: z
    .string()
    .refine((value) => phoneRegExp.test(value), {
      message: 'Invalid phone number format',
    })
    .refine((value) => value.length >= 11, {
      message: 'Phone number should be at least 11 digits',
    }),
  email: z.string().email('Invalid email').min(3, 'Email is required'),
  password: z.string().min(8, 'Password is required'),
});

const loginSchema = z.object({
    email: z.string().email('Invalid email').min(3, 'Email is required'),
    password: z.string().min(6, 'Password is required'),
  });
const requestOTPSchema = z.object({
    email: z.string().email('Invalid email').min(3, 'Email is required'),
  });
const newPasswordSchema = z.object({
    newPassword: z.string().min(6, 'New Password is required'),
    confirmPassword: z.string().min(6, 'Confirm new password'),
  });

const changePasswordSchema = z.object({
    oldPassword: z.string().min(8, 'Old Password must be atleast 8 charatcers'),
    newPassword: z.string().min(8, 'New Password must be atleast 8 charatcers'),
  });

  const setAddressSchema = z.object({
    phone: z.string().min(11, 'Phone  Number is required'), // Assuming minimum length of 1 for phone number
    country: z.string().min(3, 'Country  Number is required'),
    address: z.string().min(3, 'Address  Number is required'),
    state: z.string().min(3),
    city: z.string().min(3),
    street_name: z.string().min(3),
    postal_code: z.string().min(5),
});

const InspectionSchema = z.object({
    date: z.string().min(3, 'Date is required'),
    time: z.string().min(3, 'Time is required'),
    notes: z.string().min(0, 'Notes is required'),
  });
  const reservationSchema = z.object({
    name: z.string().min(3, 'Name is required'),
    email: z.string().email('Invalid email').min(3, 'Email is required'),
    phone: z
    .string()
    .refine((value) => phoneRegExp.test(value), {
      message: 'Invalid phone number format',
    })
    .refine((value) => value.length >= 11, {
      message: 'Phone number should be at least 11 digits',
    }),
    address: z.string().min(3, 'Address is required'),
    country: z.string().min(3, 'Country is required'),
    state: z.string().min(3, 'State of Origin is required'),
    dob: z.string().min(3, 'Date of Birth is required'),
    gender: z.string().min(3, 'Gender is required'),
    occupation: z.string().min(0, 'Occupation is required'),
  });

  const PaymentSchema = z.object({
    mode_of_payment: z.string().min(3, 'Date is required'),
    method_of_payment: z.string().min(3, 'Time is required'),
    amount: z.string().min(0, 'Notes is required'),
  });
  const cardSchema = z.object({
    cardName: z.string().min(3, 'Card name is required'),
    cardNumber: z.string().min(11, 'card number is required'),
    cvv: z.string().min(3, 'cvv is required'),
    expDate: z.string().min(3, 'card expiry date is required')
  })
  const editProfileSchema = z.object({
    firstName: z.string().min(3, 'first name is required'),
    lastName: z.string().min(3, 'last name is required'),
    email: z.string().min(3, 'first is required').email('Invalid email'),
    phone: z.string().min(3, 'phone is required')
  });
 const bvnSchema = z.object({
    bvn: z.string().min(11  , 'Required!! BVN Should not be less than 11 Digits'),
    
  });
 const ninSchema = z.object({
    bvn: z.string().min(11  , 'Required!! NIN Should not be less than 11 Digits'),
    
  });
  const searchSchema = z.object({
    search: z.string().min(0, 'search'),
  })

  
export { loginSchema, signupSchema,
   requestOTPSchema, newPasswordSchema,bvnSchema, searchSchema,
    setAddressSchema, InspectionSchema, editProfileSchema,
    reservationSchema, PaymentSchema, cardSchema, changePasswordSchema
   }