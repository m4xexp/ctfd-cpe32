import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialContentsWhereInput } from './tutorial-contents-where.input'

@InputType()
export class TutorialContentsRelationFilter {
  @Field(() => TutorialContentsWhereInput, { nullable: true })
  is?: TutorialContentsWhereInput

  @Field(() => TutorialContentsWhereInput, { nullable: true })
  isNot?: TutorialContentsWhereInput
}
