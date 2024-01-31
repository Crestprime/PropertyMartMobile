import { z } from 'zod'
const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;

const signupSchema = z.object({
    name: z.string().min(3, 'Last name is required'),
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
    // passwordStrength: z
    // .string()
    // .refine((value) => ['5%', '10%', '20%'].includes(value), {
    //   message: 'Invalid password strength',
    // }),
  });
const loginSchema = z.object({
    email: z.string().email('Invalid email').min(3, 'Email is required'),
    password: z.string().min(6, 'Password is required'),
  });
const requestOTPSchema = z.object({
    email: z.string().email('Invalid email').min(3, 'Email is required'),
  });
const newPasswordSchema = z.object({
    newPassword: z.string().min(6, 'Password is required'),
    confirmPassword: z.string().min(6, 'Password is required'),
  });
const setAddressSchema = z.object({
    country: z.string().min(3, 'Country is required'),
    email: z.string().email('Invalid email').min(3, 'Email is required'),
    state: z.string().min(3, 'State is required'),
    city: z.string().min(3, 'City is required'),
    street: z.string().min(3, 'Street is required'),
    postalCode: z.string().min(3, 'PostalCode is required'),
    apartmentNo: z.string().min(0, 'Apartment No is required'),
    landMark: z.string().min(0, 'Land Mark No is required'),
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


  
export { loginSchema, signupSchema,
   requestOTPSchema, newPasswordSchema,
    setAddressSchema, InspectionSchema,
    reservationSchema, PaymentSchema, cardSchema
   }