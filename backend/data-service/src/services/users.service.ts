import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import * as UserModel from 'src/models/users'
import { PrismaService } from 'src/providers/databases/prisma/prisma.service'
import { AuthService } from 'src/authentication/auth.service'

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService,
  ) {}

  async create(
    data: UserModel.CreateOneUsersArgs,
  ): Promise<UserModel.Users | Error> {
    /**
     * Create User record
     */
    try {
      // Enscript password
      data.data.password = await this.authService.hash(data.data.password)
      // Insert User record to database
      return await this.prisma.users.create({ ...data })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') return new ForbiddenException(e.message)
        if (e.code === 'P2000') return new ConflictException(e.message)
        if (e.code === 'P2025') return new NotFoundException(e.message)
      }
      return new InternalServerErrorException(e.message)
    }
  }

  async get(
    args: UserModel.FindManyUsersArgs,
    select: any,
  ): Promise<UserModel.Users[] | Error> {
    /**
     * Get User records
     */
    try {
      // Get User records from database
      const result: Array<UserModel.Users> = await this.prisma.users.findMany({
        ...args,
        ...select,
      })

      if (!result.length) return new NotFoundException('Record not found')

      return result
    } catch (e) {
      if (e instanceof Error) return e
      return new InternalServerErrorException(e.message)
    }
  }

  async update(
    args: UserModel.UpdateOneUsersArgs,
    select: any,
  ): Promise<UserModel.Users | Error> {
    /**
     * Update or create Users record
     */
    try {
      if (args.data.password)
        args.data.password.set = await this.authService.hash(
          args.data.password.set,
        )
      // Update User record
      return await this.prisma.users.update({ ...args, ...select })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2025')
          return new NotFoundException(Object.values(e.meta)[0])
      }
      return new InternalServerErrorException(e.message)
    }
  }

  async delete(
    args: UserModel.DeleteOneUsersArgs,
  ): Promise<UserModel.Users | Error> {
    /**
     * Delete Users record
     */
    try {
      // Delete User record
      return await this.prisma.users.delete({ ...args })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2025')
          return new NotFoundException(Object.values(e.meta)[0])
      }
      return new InternalServerErrorException(e.message)
    }
  }
}
