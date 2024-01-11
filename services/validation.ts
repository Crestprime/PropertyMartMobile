import { z } from 'zod'
const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;

const signupSchema = z.object({
    firstname: z.string().min(3, 'First name is required'),
    lastname: z.string().min(3, 'Last name is required'),
    phoneNumber: z
      .string()
      .refine((value) => phoneRegExp.test(value), {
        message: 'Invalid phone number format',
      })
      .refine((value) => value.length >= 11, {
        message: 'Phone number should be at least 11 digits',
      }),
    email: z.string().email('Invalid email').min(3, 'Email is required'),
    password: z.string().min(6, 'Password is required'),
    passwordStrength: z
    .string()
    .refine((value) => ['5%', '10%', '20%'].includes(value), {
      message: 'Invalid password strength',
    }),
  });
const loginSchema = z.object({

    phoneNumber: z
      .string()
      .refine((value) => phoneRegExp.test(value), {
        message: 'Invalid phone number format',
      })
      .refine((value) => value.length >= 11, {
        message: 'Phone number should be at least 11 digits',
      }),
    email: z.string().email('Invalid email').min(3, 'Email is required'),
    password: z.string().min(6, 'Password is required'),
    passwordStrength: z
    .string()
    .refine((value) => ['5%', '10%', '20%'].includes(value), {
      message: 'Invalid password strength',
    }),
  });

  
export { loginSchema, signupSchema }