import { UseGuards, Logger } from '@nestjs/common'
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { GqlAuthGuard } from 'src/commons/guards/gql-auth.guard'
import * as Teams from 'src/models/teams'
import { TeamsService } from 'src/services/teams.service'

@Resolver(() => Teams.Teams)
export class TeamsResolver {
  private logger: Logger
  constructor(private userLoggingsService: TeamsService) {
    this.logger = new Logger('Teamss Service')
  }

  /**
   * Get Teams records
   */
  @Query(() => [Teams.Teams], {
    name: 'getTeams',
    nullable: true,
  })
  // @UseGuards(GqlAuthGuard)
  async getTeams(
    @Args('') args: Teams.FindManyTeamsArgs,
    @Info() info: GraphQLResolveInfo,
  ): Promise<Teams.Teams[] | Error> {
    const select = new PrismaSelect(info).value
    const result = await this.userLoggingsService.get(args, select)

    // Error
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }

  /**
   * Create Teams record
   */
  @Mutation(() => Teams.Teams, {
    name: 'createTeams',
    nullable: true,
  })
  async createTeams(
    @Args('') args: Teams.CreateOneTeamsArgs,
  ): Promise<Teams.Teams | Error> {
    const result = await this.userLoggingsService.create(args)

    // Error
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }

  /**
   * Update Teams record
   */
  @Mutation(() => Teams.Teams, {
    name: 'updateTeams',
    nullable: true,
  })
  async updateTeams(
    @Args('') args: Teams.UpdateOneTeamsArgs,
    @Info() info: GraphQLResolveInfo,
  ): Promise<Teams.Teams | Error> {
    const select = new PrismaSelect(info).value
    const result = await this.userLoggingsService.update(args, select)
    // Error
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }

  /**
   * Delete Teams record
   */
  @Mutation(() => Teams.Teams, {
    name: 'deleteTeams',
    nullable: true,
  })
  // @UseGuards(GqlAuthGuard)
  async deleteTeams(
    @Args('') args: Teams.DeleteOneTeamsArgs,
  ): Promise<Teams.Teams | Error> {
    const result = await this.userLoggingsService.delete(args)
    // Error
    if (result instanceof Error) this.logger.error(`${result}`)

    return result
  }
}
