import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserScoresWhereInput } from './user-scores-where.input'
import { UserScoresOrderByWithRelationInput } from './user-scores-order-by-with-relation.input'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { Int } from '@nestjs/graphql'
import { UserScoresScalarFieldEnum } from './user-scores-scalar-field.enum'

@ArgsType()
export class FindManyUserScoresArgs {
  @Field(() => UserScoresWhereInput, { nullable: true })
  where?: UserScoresWhereInput

  @Field(() => [UserScoresOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserScoresOrderByWithRelationInput>

  @Field(() => UserScoresWhereUniqueInput, { nullable: true })
  cursor?: UserScoresWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [UserScoresScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScoresScalarFieldEnum>
}
