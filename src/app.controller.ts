import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadDto } from './app.dto';
import createReport from 'docx-templates';
const fs = require('fs');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of cats',
    type: FileUploadDto,
  })
  async uploadFile(@UploadedFile() file) {
    const user = {
      name: {
        first: 'hai',
        last: 'nguyen',
      },
      email: 'nguyen.duc.hai2@sun-asterisk.com',
      phone: '0901234567',
      location: {
        city: 'Hanoi',
        state: 'Nam Tu Liem',
      },
      avatar: {
        data: '',
        width: 6,
        height: 6,
        extension: '.png',
      },
    };
    console.log(file);
    user.avatar.data = file.buffer;
    const docxFile = fs.readFileSync('./resume-template.docx');
    try {
      const buffer = await createReport({
        template: docxFile,
        data: user,
        cmdDelimiter: ['{', '}'],
      });

      fs.writeFileSync('document_with_image.docx', buffer);
      console.log('Image inserted successfully!');
    } catch (error) {
      console.log(error);
    }
  }
}
