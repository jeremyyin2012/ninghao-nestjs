import { createParamDecorator } from '@nestjs/common'

export const User = createParamDecorator((data, req) => {
    console.log('data:', data)
    
    return req.user[data]
})