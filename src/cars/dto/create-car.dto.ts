import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCarDTO {


  @IsString()
  @IsNotEmpty()
  readonly brand: string;

  @IsString()
  @IsNotEmpty()
  readonly model: string ;

}