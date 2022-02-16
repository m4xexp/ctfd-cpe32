import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TutorialContentsUpdateManyMutationInput } from './tutorial-contents-update-many-mutation.input'
import { TutorialContentsWhereInput } from './tutorial-contents-where.input'

@ArgsType()
export class UpdateManyTutorialContentsArgs {
  @Field(() => TutorialContentsUpdateManyMutationInput, { nullable: false })
  data!: TutorialContentsUpdateManyMutationInput

  @Field(() => TutorialContentsWhereInput, { nullable: true })
  where?: TutorialContentsWhereInput
}
