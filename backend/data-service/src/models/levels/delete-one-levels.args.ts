import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LevelsWhereUniqueInput } from './levels-where-unique.input'

@ArgsType()
export class DeleteOneLevelsArgs {
  @Field(() => LevelsWhereUniqueInput, { nullable: false })
  where!: LevelsWhereUniqueInput
}
