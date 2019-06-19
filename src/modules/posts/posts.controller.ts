import { Controller, Get, Post, Req, Query, Headers, Param, Body, HttpException, HttpStatus, ForbiddenException, UseFilters, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, SetMetadata } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { DemoService } from './providers/demo/demo.service'
import { DemoFilter } from '../../core/filters/demo.filter'
import { DemoAuthGuard } from '../../core/guards/demo-auth.guard'


@Controller('posts')
// @UseGuards(DemoAuthGuard)
// @UseFilters(DemoFilter)
export class PostsController {

    constructor(private readonly demoService: DemoService) {}

    @Get()
    index() {
        return this.demoService.findAll();
    }

    @Get(':id')
    show(@Param('id', ParseIntPipe) id) {
        console.log('typeof id:', typeof id);
        
        return {
            title: `Post ${id}`
        }
    }

    @Post()
    // @UseFilters(DemoFilter)
    @UsePipes(ValidationPipe)
    @SetMetadata('roles', ['member', 89])
    store(@Body() post: CreatePostDto) {
        // throw new HttpException('没有权限！', HttpStatus.FORBIDDEN)
        // throw new ForbiddenException('没有权限！')
        this.demoService.create(post);
    }
}
