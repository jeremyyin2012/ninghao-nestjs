import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
    ) { }

    async store(data) {
        const entity = await this.postRepository.create(data);
        return await this.postRepository.save(entity);
    }
}
