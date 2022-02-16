import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserScoresCreateManyInput } from './user-scores-create-many.input'

@ArgsType()
export class CreateManyUserScoresArgs {
  @Field(() => [UserScoresCreateManyInput], { nullable: false })
  data!: Array<UserScoresCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
