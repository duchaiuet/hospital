// 01GJH7CR43TNM0V9XF5MDMKJC6
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  Validate,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty()
  @IsEmail(
    { ignore_max_length: true },
    { message: '$property invalid format email' },
  )
  @IsNotEmpty({ message: '$property is required' })
  @Length(0, 255, {
    message: '$property must be less than $constraint2 characters',
  })
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;

  //   @ApiProperty()
  //   @IsNotEmpty({ message: '$property is required' })
  //   @Length(8, 50, {
  //     message: '$property must be less than $constraint2 characters',
  //   })
  //     @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
  //       message:
  //         'password must be at least 8 characters including a number an uppercase letter a lowercase a special character',
  //     })
  //   password: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isAdmin?: boolean;
}
