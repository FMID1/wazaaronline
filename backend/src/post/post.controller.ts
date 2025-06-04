import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

@Post()
create(@Body() createPostDto: CreatePostDto) {
  return this.postService.create(createPostDto);
}

  @Get()
  findAll() {
    return this.postService.findAll();
  }
}

