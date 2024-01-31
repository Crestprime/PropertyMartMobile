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

  const cardSchema = z.object({
    cardName: z.string().min(3, 'Card name is required'),
    cardNumber: z.string().min(11, 'card number is required'),
    cvv: z.string().min(3, 'cvv is required'),
    expDate: z.string().min(3, 'card expiry date is required')
  })

  
export { loginSchema, signupSchema, requestOTPSchema, newPasswordSchema,  cardSchema }