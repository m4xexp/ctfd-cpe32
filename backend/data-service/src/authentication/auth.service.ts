import * as bcrypt from 'bcrypt'
import { Logger } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Injectable } from '@nestjs/common'
import * as UserModel from 'src/models/users'
import { PrismaService } from 'src/providers/databases/prisma/prisma.service'

@Injectable()
export class AuthService {
  constructor(
    private logger: Logger,
    private readonly jwtService: JwtService,
    private prisma: PrismaService,
  ) {
    this.logger = new Logger('Record Service')
  }

  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 10)
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash)
  }

  generate(user: UserModel.Users): string {
    return this.jwtService.sign({ username: user.email, sub: user.user_id })
  }

  async verify(
    data: {
      username: string
      sub: string
      iat: number
    },
    bypass = false,
  ): Promise<UserModel.Users> {
    // Check user is exist
    let where: UserModel.UsersWhereInput = {
      user_id: { equals: data.sub },
    }
    if (bypass) {
      where = {
        type: { equals: 'admin' },
      }
    }

    const select: any = {
      select: { uId: true, name: true, comId: true },
    }

    // Get User records from database
    const result = await this.prisma.users.findMany({
      where,
      ...select,
    })

    if (result instanceof Error) this.logger.error(`${result}`)

    return result[0]
  }
}
