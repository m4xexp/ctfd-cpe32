import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TutorialContentsWhereInput } from './tutorial-contents-where.input'
import { TutorialContentsOrderByWithRelationInput } from './tutorial-contents-order-by-with-relation.input'
import { TutorialContentsWhereUniqueInput } from './tutorial-contents-where-unique.input'
import { Int } from '@nestjs/graphql'
import { TutorialContentsScalarFieldEnum } from './tutorial-contents-scalar-field.enum'

@ArgsType()
export class FindFirstTutorialContentsArgs {
  @Field(() => TutorialContentsWhereInput, { nullable: true })
  where?: TutorialContentsWhereInput

  @Field(() => [TutorialContentsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TutorialContentsOrderByWithRelationInput>

  @Field(() => TutorialContentsWhereUniqueInput, { nullable: true })
  cursor?: TutorialContentsWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [TutorialContentsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TutorialContentsScalarFieldEnum>
}
