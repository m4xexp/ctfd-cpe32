import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserLoggingsWhereInput } from './user-loggings-where.input'
import { UserLoggingsOrderByWithRelationInput } from './user-loggings-order-by-with-relation.input'
import { UserLoggingsWhereUniqueInput } from './user-loggings-where-unique.input'
import { Int } from '@nestjs/graphql'
import { UserLoggingsScalarFieldEnum } from './user-loggings-scalar-field.enum'

@ArgsType()
export class FindManyUserLoggingsArgs {
  @Field(() => UserLoggingsWhereInput, { nullable: true })
  where?: UserLoggingsWhereInput

  @Field(() => [UserLoggingsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserLoggingsOrderByWithRelationInput>

  @Field(() => UserLoggingsWhereUniqueInput, { nullable: true })
  cursor?: UserLoggingsWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [UserLoggingsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserLoggingsScalarFieldEnum>
}
