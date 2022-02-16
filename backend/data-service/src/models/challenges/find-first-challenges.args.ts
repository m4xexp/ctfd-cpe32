import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ChallengesWhereInput } from './challenges-where.input'
import { ChallengesOrderByWithRelationInput } from './challenges-order-by-with-relation.input'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { Int } from '@nestjs/graphql'
import { ChallengesScalarFieldEnum } from './challenges-scalar-field.enum'

@ArgsType()
export class FindFirstChallengesArgs {
  @Field(() => ChallengesWhereInput, { nullable: true })
  where?: ChallengesWhereInput

  @Field(() => [ChallengesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ChallengesOrderByWithRelationInput>

  @Field(() => ChallengesWhereUniqueInput, { nullable: true })
  cursor?: ChallengesWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [ChallengesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ChallengesScalarFieldEnum>
}
