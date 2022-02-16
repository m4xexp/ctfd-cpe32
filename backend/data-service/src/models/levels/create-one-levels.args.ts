import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LevelsCreateInput } from './levels-create.input'

@ArgsType()
export class CreateOneLevelsArgs {
  @Field(() => LevelsCreateInput, { nullable: false })
  data!: LevelsCreateInput
}
