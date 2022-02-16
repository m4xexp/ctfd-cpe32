import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { UserScoresCreateInput } from './user-scores-create.input'
import { UserScoresUpdateInput } from './user-scores-update.input'

@ArgsType()
export class UpsertOneUserScoresArgs {
  @Field(() => UserScoresWhereUniqueInput, { nullable: false })
  where!: UserScoresWhereUniqueInput

  @Field(() => UserScoresCreateInput, { nullable: false })
  create!: UserScoresCreateInput

  @Field(() => UserScoresUpdateInput, { nullable: false })
  update!: UserScoresUpdateInput
}
