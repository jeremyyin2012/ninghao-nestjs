import { Controller, Get, Post, Req, Query, Headers, Param, Body } from '@nestjs/common';

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

    @Get(':id')
    show(@Param() params) {
        return {
            title: `Post ${params.id}`
        }
    }

    @Post()
    store(@Body() body) {
        console.log(body)
        return body
    }
}
