import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserScoresUpdateManyMutationInput } from './user-scores-update-many-mutation.input'
import { UserScoresWhereInput } from './user-scores-where.input'

@ArgsType()
export class UpdateManyUserScoresArgs {
  @Field(() => UserScoresUpdateManyMutationInput, { nullable: false })
  data!: UserScoresUpdateManyMutationInput

  @Field(() => UserScoresWhereInput, { nullable: true })
  where?: UserScoresWhereInput
}
