import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import * as UserLoggingsModel from 'src/models/user-loggings'
import { PrismaService } from 'src/providers/databases/prisma/prisma.service'

@Injectable()
export class UserLoggingsService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: UserLoggingsModel.CreateOneUserLoggingsArgs,
  ): Promise<UserLoggingsModel.UserLoggings | Error> {
    /**
     * Create User logging record
     */
    try {
      // Insert User logging record to database
      return await this.prisma.userLoggings.create({ ...data })
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
    args: UserLoggingsModel.FindManyUserLoggingsArgs,
    select: any,
  ): Promise<UserLoggingsModel.UserLoggings[] | Error> {
    /**
     * Get User logging records
     */
    try {
      // Get User logging records from database
      const result = await this.prisma.userLoggings.findMany({
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
    args: UserLoggingsModel.UpdateOneUserLoggingsArgs,
    select: any,
  ): Promise<UserLoggingsModel.UserLoggings | Error> {
    /**
     * Update or create Users logging record
     */
    try {
      // Update User logging record
      return await this.prisma.userLoggings.update({ ...args, ...select })
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
    args: UserLoggingsModel.DeleteOneUserLoggingsArgs,
  ): Promise<UserLoggingsModel.UserLoggings | Error> {
    /**
     * Delete Users record
     */
    try {
      // Delete User record
      return await this.prisma.userLoggings.delete({ ...args })
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
