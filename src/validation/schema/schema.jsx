// zod
import { z } from 'zod'
import { patterns } from '../constants/constants'

const baseSchema = z
.object({
    companyName: z.string()
    .min(2 , {message: 'الاسم يجب أن يكون أكثر من حرفين'}) ,

    email: z.string()
        .min(1 , {message: 'يجب ادخال ايميل'}) 
        .refine(
            email => patterns.email.test(email) , {message: 'يجب أن يكون البريد الإلكتروني صالحًا'}
        ) ,

    nationalId: z.string()
        .regex(patterns.nationalId , { message: 'يجب أن تكون الهوية الوطنية السعودية مكونة من 15 رقمًا' }),

    saudiPhoneNumber: z.string()
        .min(1 , {message: 'لايجب ان يقل رقم الهاتف عن 10 خانات'})
        .max(10 , {message: 'لايجب ان يزيد رقم الهاتف عن 10 خانات'})
        .regex(patterns.phoneNumber , {message: 'يجب أن يكون رقم الهاتف الصالح ( يبدأ ب 05+ )'}) ,

    commercialRegistrationNumber: z.string()
        .regex(patterns.commercialRegistrationNumber , {message: 'رقم السجل التجاري غير موجود في النظام'}) ,

    vatNumber: z.string()
        // .length(15)
        .regex(patterns.vatNumber , {message: 'رقم ضريبة القيمة المضافة يجب أن يكون 15 رقمًا'}) ,

    country: z.string()
        .min(1 ,  {message: 'البلد مطلوب'}),

    category: z.string()
        .min(1 , {message: 'الفئة مطلوبة'}),

    password: z.string()
        .min(8 , {message: 'كلمة المرور يجب أن تكون 8 أحرف على الأقل'})
        .regex(patterns.password , 
            {message: "يجب أن تحتوي كلمة المرور على حرف خاص واحد على الأقل"}
        ),
    
    confirmPassword: z.string()
        .min(1 , {message: "تأكيد كلمة المرور مطلوب"})
})

// Sign In Schema 
export const signIn = baseSchema.omit({ 
    companyName: true , 
    confirmPassword: true ,
    commercialRegistrationNumber: true ,
    nationalId: true,
    country: true,
    category: true,
    vatNumber: true ,
}) 

// Buyer Registration Schema
export const buyerRegistration = baseSchema.omit({
    nationalId: true
}).refine(
    (input) => input.password === input.confirmPassword,
    {
        message: 'كلمة المرور وتأكيد كلمة المرور لا يتطابقان',
        path: ['confirmPassword'],
    },
);

// Seller Registration Schema
export const sellerRegistration =  baseSchema.omit({
    nationalId: true,
    country: true,
    category: true
}).refine(
    (input) => input.password === input.confirmPassword,
    {
        message: 'كلمة المرور وتأكيد كلمة المرور لا يتطابقان',
        path: ['confirmPassword'],
    },
);

// Admin Registration Schema
export const adminRegistration = baseSchema.omit({
    commercialRegistrationNumber: true,
    vatNumber: true,
    country: true,
    category: true
}).refine(
    (input) => input.password === input.confirmPassword,
    {
        message: 'كلمة المرور وتأكيد كلمة المرور لا يتطابقان',
        path: ['confirmPassword'],
    },
);