import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UserTutorialsUser_idChapter_idCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  user_id!: string

  @Field(() => String, { nullable: false })
  chapter_id!: string
}
