import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserTutorialsWhereInput } from './user-tutorials-where.input'
import { UserTutorialsOrderByWithRelationInput } from './user-tutorials-order-by-with-relation.input'
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input'
import { Int } from '@nestjs/graphql'
import { UserTutorialsScalarFieldEnum } from './user-tutorials-scalar-field.enum'

@ArgsType()
export class FindFirstUserTutorialsArgs {
  @Field(() => UserTutorialsWhereInput, { nullable: true })
  where?: UserTutorialsWhereInput

  @Field(() => [UserTutorialsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserTutorialsOrderByWithRelationInput>

  @Field(() => UserTutorialsWhereUniqueInput, { nullable: true })
  cursor?: UserTutorialsWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [UserTutorialsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserTutorialsScalarFieldEnum>
}
