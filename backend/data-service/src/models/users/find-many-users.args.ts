import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UsersWhereInput } from './users-where.input'
import { UsersOrderByWithRelationInput } from './users-order-by-with-relation.input'
import { UsersWhereUniqueInput } from './users-where-unique.input'
import { Int } from '@nestjs/graphql'
import { UsersScalarFieldEnum } from './users-scalar-field.enum'

@ArgsType()
export class FindManyUsersArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  where?: UsersWhereInput

  @Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithRelationInput>

  @Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: UsersWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [UsersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UsersScalarFieldEnum>
}
