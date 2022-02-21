import { UseGuards, Logger } from '@nestjs/common'
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { GqlAuthGuard } from 'src/commons/guards/gql-auth.guard'
import * as UserLoggingsModel from 'src/models/user-loggings'
import { UserLoggingsService } from 'src/services/userLoggings.service'

@Resolver(() => UserLoggingsModel.UserLoggings)
export class UserLoggingsResolver {
  private logger: Logger
  constructor(private userLoggingsService: UserLoggingsService) {
    this.logger = new Logger('User Loggings Service')
  }

  /**
   * Get User Logging records
   */
  @Query(() => [UserLoggingsModel.UserLoggings], {
    name: 'getUserLoggings',
    nullable: true,
  })
  // @UseGuards(GqlAuthGuard)
  async getUserLoggings(
    @Args('') args: UserLoggingsModel.FindManyUserLoggingsArgs,
    @Info() info: GraphQLResolveInfo,
  ): Promise<UserLoggingsModel.UserLoggings[] | Error> {
    const select = new PrismaSelect(info).value
    const result = await this.userLoggingsService.get(args, select)

    // Error
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }

  /**
   * Create User Logging record
   */
  @Mutation(() => UserLoggingsModel.UserLoggings, {
    name: 'createUserLoggings',
    nullable: true,
  })
  async createUserLoggings(
    @Args('') args: UserLoggingsModel.CreateOneUserLoggingsArgs,
  ): Promise<UserLoggingsModel.UserLoggings | Error> {
    const result = await this.userLoggingsService.create(args)

    // Error
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }

  /**
   * Update User Logging record
   */
  @Mutation(() => UserLoggingsModel.UserLoggings, {
    name: 'updateUserLoggings',
    nullable: true,
  })
  async updateUserLoggings(
    @Args('') args: UserLoggingsModel.UpdateOneUserLoggingsArgs,
    @Info() info: GraphQLResolveInfo,
  ): Promise<UserLoggingsModel.UserLoggings | Error> {
    const select = new PrismaSelect(info).value
    const result = await this.userLoggingsService.update(args, select)
    // Error
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }

  /**
   * Delete User Logging record
   */
  @Mutation(() => UserLoggingsModel.UserLoggings, {
    name: 'deleteUserLoggings',
    nullable: true,
  })
  // @UseGuards(GqlAuthGuard)
  async deleteUserLoggings(
    @Args('') args: UserLoggingsModel.DeleteOneUserLoggingsArgs,
  ): Promise<UserLoggingsModel.UserLoggings | Error> {
    const result = await this.userLoggingsService.delete(args)
    // Error
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }
}
