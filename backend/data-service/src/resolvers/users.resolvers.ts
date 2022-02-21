import { UseGuards, Logger } from '@nestjs/common'
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { GqlAuthGuard } from 'src/commons/guards/gql-auth.guard'
import * as UsersModel from 'src/models/users'
import { UsersService } from 'src/services/users.service'

@Resolver(() => UsersModel.Users)
export class UsersResolver {
  private logger: Logger
  constructor(private usersService: UsersService) {
    this.logger = new Logger('User Service')
  }

  /**
   * Get User records
   */
  @Query(() => [UsersModel.Users], {
    name: 'getUsers',
    nullable: true,
  })
  // @UseGuards(GqlAuthGuard)
  async getUsers(
    @Args('') args: UsersModel.FindManyUsersArgs,
    @Info() info: GraphQLResolveInfo,
  ): Promise<UsersModel.Users[] | Error> {
    const select = new PrismaSelect(info).value
    const result = await this.usersService.get(args, select)

    // Error
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }

  /**
   * Create User record
   */
  @Mutation(() => UsersModel.Users, {
    name: 'createUser',
    nullable: true,
  })
  async createUser(
    @Args('') args: UsersModel.CreateOneUsersArgs,
  ): Promise<UsersModel.Users | Error> {
    const result = await this.usersService.create(args)

    // Error
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }

  /**
   * Update User record
   */
  @Mutation(() => UsersModel.Users, {
    name: 'updateUser',
    nullable: true,
  })
  async updateUser(
    @Args('') args: UsersModel.UpdateOneUsersArgs,
    @Info() info: GraphQLResolveInfo,
  ): Promise<UsersModel.Users | Error> {
    const select = new PrismaSelect(info).value
    const result = await this.usersService.update(args, select)
    // Error
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }

  /**
   * Delete User record
   */
  @Mutation(() => UsersModel.Users, {
    name: 'deleteUser',
    nullable: true,
  })
  // @UseGuards(GqlAuthGuard)
  async deleteUser(
    @Args('') args: UsersModel.DeleteOneUsersArgs,
  ): Promise<UsersModel.Users | Error> {
    const result = await this.usersService.delete(args)
    // Error
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }
}
