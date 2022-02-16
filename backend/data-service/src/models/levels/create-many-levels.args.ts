import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LevelsCreateManyInput } from './levels-create-many.input'

@ArgsType()
export class CreateManyLevelsArgs {
  @Field(() => [LevelsCreateManyInput], { nullable: false })
  data!: Array<LevelsCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
