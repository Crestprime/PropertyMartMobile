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

  
export { loginSchema, signupSchema, requestOTPSchema, newPasswordSchema, setAddressSchema, InspectionSchema }