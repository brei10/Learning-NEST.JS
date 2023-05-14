import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateCarDTO {


  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly model?: string ;

}