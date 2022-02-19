import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input'
import { UserTutorialsUpdateWithoutTutorialChapterDatasInput } from './user-tutorials-update-without-tutorial-chapter-datas.input'

@InputType()
export class UserTutorialsUpdateWithWhereUniqueWithoutTutorialChapterDatasInput {
  @Field(() => UserTutorialsWhereUniqueInput, { nullable: false })
  where!: UserTutorialsWhereUniqueInput

  @Field(() => UserTutorialsUpdateWithoutTutorialChapterDatasInput, {
    nullable: false,
  })
  data!: UserTutorialsUpdateWithoutTutorialChapterDatasInput
}
