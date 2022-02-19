import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ChallengesCreateManyInput } from './challenges-create-many.input'

@ArgsType()
export class CreateManyChallengesArgs {
  @Field(() => [ChallengesCreateManyInput], { nullable: false })
  data!: Array<ChallengesCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
