import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookRequest, BookResponse } from './models';
import * as cuid from 'cuid';

@Controller('books')
export class BooksController {
    data = [{
        id: '1', title: 'Book 1', author: 'Author 1', format: 'Paperback',
    },
    {
        id: '2', title: 'Book 2', author: 'Author 2', format: 'Hardcover',
    }];

    @Get()
    getData() {
        return this.data;
    }

    @Post()
    addBook(@Body() book: BookRequest) {
        const newBook: BookResponse = {
            id: cuid(),
            title: book.title,
            author: book.author,
            format: book.format,
        };
        this.data.push(newBook);
        return newBook;
    }
}
