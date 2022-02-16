import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserScoresCreateInput } from './user-scores-create.input'

@ArgsType()
export class CreateOneUserScoresArgs {
  @Field(() => UserScoresCreateInput, { nullable: false })
  data!: UserScoresCreateInput
}
