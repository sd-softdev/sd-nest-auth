# using sd-nest-auth

## install npm package
```
npm i sd-nest-auth
```

## import sd-nest-auth module
```js
import { Module } from '@nestjs/common';
import { AuthModule } from 'sd-nest-auth';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'mep2',
      entities: [join(__dirname, './../**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
```

## start server

```
npm run start:dev
```

## api calls - tbd
