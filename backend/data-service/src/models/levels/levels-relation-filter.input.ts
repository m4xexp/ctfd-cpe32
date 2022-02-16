import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LevelsWhereInput } from './levels-where.input'

@InputType()
export class LevelsRelationFilter {
  @Field(() => LevelsWhereInput, { nullable: true })
  is?: LevelsWhereInput

  @Field(() => LevelsWhereInput, { nullable: true })
  isNot?: LevelsWhereInput
}
