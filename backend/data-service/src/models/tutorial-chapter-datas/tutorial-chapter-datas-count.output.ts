import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class TutorialChapterDatasCount {
  @Field(() => Int, { nullable: false })
  userTutorials!: number
}
