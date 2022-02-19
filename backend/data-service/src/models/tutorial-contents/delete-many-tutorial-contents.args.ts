import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TutorialContentsWhereInput } from './tutorial-contents-where.input'

@ArgsType()
export class DeleteManyTutorialContentsArgs {
  @Field(() => TutorialContentsWhereInput, { nullable: true })
  where?: TutorialContentsWhereInput
}
