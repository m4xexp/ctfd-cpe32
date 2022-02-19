import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TutorialContentsCreateInput } from './tutorial-contents-create.input'

@ArgsType()
export class CreateOneTutorialContentsArgs {
  @Field(() => TutorialContentsCreateInput, { nullable: false })
  data!: TutorialContentsCreateInput
}
