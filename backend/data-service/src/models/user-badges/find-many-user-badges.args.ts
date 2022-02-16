import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserBadgesWhereInput } from './user-badges-where.input'
import { UserBadgesOrderByWithRelationInput } from './user-badges-order-by-with-relation.input'
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input'
import { Int } from '@nestjs/graphql'
import { UserBadgesScalarFieldEnum } from './user-badges-scalar-field.enum'

@ArgsType()
export class FindManyUserBadgesArgs {
  @Field(() => UserBadgesWhereInput, { nullable: true })
  where?: UserBadgesWhereInput

  @Field(() => [UserBadgesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserBadgesOrderByWithRelationInput>

  @Field(() => UserBadgesWhereUniqueInput, { nullable: true })
  cursor?: UserBadgesWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [UserBadgesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserBadgesScalarFieldEnum>
}
