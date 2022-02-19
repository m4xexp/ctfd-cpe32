import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TutorialChapterDatasCreateManyInput } from './tutorial-chapter-datas-create-many.input'

@ArgsType()
export class CreateManyTutorialChapterDatasArgs {
  @Field(() => [TutorialChapterDatasCreateManyInput], { nullable: false })
  data!: Array<TutorialChapterDatasCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
