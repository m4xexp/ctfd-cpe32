import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialChapterDatasScalarWhereInput } from './tutorial-chapter-datas-scalar-where.input'
import { TutorialChapterDatasUpdateManyMutationInput } from './tutorial-chapter-datas-update-many-mutation.input'

@InputType()
export class TutorialChapterDatasUpdateManyWithWhereWithoutTutorialContentsInput {
  @Field(() => TutorialChapterDatasScalarWhereInput, { nullable: false })
  where!: TutorialChapterDatasScalarWhereInput

  @Field(() => TutorialChapterDatasUpdateManyMutationInput, { nullable: false })
  data!: TutorialChapterDatasUpdateManyMutationInput
}
