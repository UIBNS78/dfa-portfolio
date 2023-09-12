import * as yup from 'yup'

export const ContactSchema = yup.object({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    subject: yup.string().min(5).required(),
    message: yup.string().required(),
})