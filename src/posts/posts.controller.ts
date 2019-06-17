import { Controller, Get, Req, Query, Headers } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Get()
    index(@Headers('authorization') headers, @Query() query) {
        console.log(headers)
        console.log(query)
        return [
            {
                title: 'hello ~'
            }
        ]
    }
}
