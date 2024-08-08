import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
    body: object({
        name: string({
            required_error: 'Name is a required field'
        }),
        password: string({
            required_error: 'Password is a required field'
        }).min(4, 'Password is too short'),
        // confirmPassword: string({
        //     required_error: 'Password confirmation is a required'
        // }),
        email: string({
            required_error: 'Email is a required field'
        }).email('Must be a valid email')
    })
    // .refine((data) => data.password === data.confirmPassword, {
    //     message: 'Password do not match',
    //     path:['confirmPassword']
    // })
})


export type createUserInput = Omit<TypeOf<typeof createUserSchema>, 'body.confirmPassword'>

