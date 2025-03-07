import { IsNotEmpty, IsPositive, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsPositive()
  price: number;

  @IsOptional()
  description?: string;
}
