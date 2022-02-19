import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresWhereInput } from './user-scores-where.input'

@InputType()
export class UserScoresListRelationFilter {
  @Field(() => UserScoresWhereInput, { nullable: true })
  every?: UserScoresWhereInput

  @Field(() => UserScoresWhereInput, { nullable: true })
  some?: UserScoresWhereInput

  @Field(() => UserScoresWhereInput, { nullable: true })
  none?: UserScoresWhereInput
}
