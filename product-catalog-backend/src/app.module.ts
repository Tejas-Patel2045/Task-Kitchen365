import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'product_catalog',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ Use only for development!
    }),
    ProductsModule,
  ],
})
export class AppModule {}
