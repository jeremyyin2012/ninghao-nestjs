import { Controller, Get, Post, Req, Query, Headers, Param, Body } from '@nestjs/common';
import { CreatePostDto } from './post.dto';

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
    store(@Body() post: CreatePostDto) {
        console.log(post)
        return post
    }
}
