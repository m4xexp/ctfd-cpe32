import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import * as TeamModel from 'src/models/teams'
import { PrismaService } from 'src/providers/databases/prisma/prisma.service'

@Injectable()
export class TeamsService {
  constructor(private prisma: PrismaService) {}

  // Bug
  async create(data: any): Promise<TeamModel.Teams | Error> {
    /**
     * Create Team record
     */
    try {
      // Insert Team record to database
      return this.prisma.teams.create({ ...data })
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
    args: TeamModel.FindManyTeamsArgs,
    select: any,
  ): Promise<TeamModel.Teams[] | Error> {
    /**
     * Get Team records
     */
    try {
      // Get Team records from database
      const result = await this.prisma.teams.findMany({
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
    args: TeamModel.UpdateOneTeamsArgs,
    select: any,
  ): Promise<TeamModel.Teams | Error> {
    /**
     * Update or create Users logging record
     */
    try {
      // Update Team record
      return await this.prisma.teams.update({ ...args, ...select })
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
    args: TeamModel.DeleteOneTeamsArgs,
  ): Promise<TeamModel.Teams | Error> {
    /**
     * Delete Users record
     */
    try {
      // Delete User record
      return await this.prisma.teams.delete({ ...args })
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
