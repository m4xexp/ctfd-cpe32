import { Module, Logger } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthService } from 'src/authentication/auth.service'
import { configModuleConfig } from 'src/configs/configModule/configModule.config'
import { PrismaModule } from 'src/providers/databases/prisma/prisma.module'
import { JwtStrategy } from 'src/authentication/strategies/jwt.strategy'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secretKey'),
      }),
    }),
    ConfigModule.forRoot(configModuleConfig),
    PrismaModule,
  ],
  providers: [Logger, AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
