import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesCreateWithoutCategoriesInput } from './challenges-create-without-categories.input'
import { ChallengesCreateOrConnectWithoutCategoriesInput } from './challenges-create-or-connect-without-categories.input'
import { ChallengesUpsertWithWhereUniqueWithoutCategoriesInput } from './challenges-upsert-with-where-unique-without-categories.input'
import { ChallengesCreateManyCategoriesInputEnvelope } from './challenges-create-many-categories-input-envelope.input'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesUpdateWithWhereUniqueWithoutCategoriesInput } from './challenges-update-with-where-unique-without-categories.input'
import { ChallengesUpdateManyWithWhereWithoutCategoriesInput } from './challenges-update-many-with-where-without-categories.input'
import { ChallengesScalarWhereInput } from './challenges-scalar-where.input'

@InputType()
export class ChallengesUpdateManyWithoutCategoriesInput {
  @Field(() => [ChallengesCreateWithoutCategoriesInput], { nullable: true })
  create?: Array<ChallengesCreateWithoutCategoriesInput>

  @Field(() => [ChallengesCreateOrConnectWithoutCategoriesInput], {
    nullable: true,
  })
  connectOrCreate?: Array<ChallengesCreateOrConnectWithoutCategoriesInput>

  @Field(() => [ChallengesUpsertWithWhereUniqueWithoutCategoriesInput], {
    nullable: true,
  })
  upsert?: Array<ChallengesUpsertWithWhereUniqueWithoutCategoriesInput>

  @Field(() => ChallengesCreateManyCategoriesInputEnvelope, { nullable: true })
  createMany?: ChallengesCreateManyCategoriesInputEnvelope

  @Field(() => [ChallengesWhereUniqueInput], { nullable: true })
  set?: Array<ChallengesWhereUniqueInput>

  @Field(() => [ChallengesWhereUniqueInput], { nullable: true })
  disconnect?: Array<ChallengesWhereUniqueInput>

  @Field(() => [ChallengesWhereUniqueInput], { nullable: true })
  delete?: Array<ChallengesWhereUniqueInput>

  @Field(() => [ChallengesWhereUniqueInput], { nullable: true })
  connect?: Array<ChallengesWhereUniqueInput>

  @Field(() => [ChallengesUpdateWithWhereUniqueWithoutCategoriesInput], {
    nullable: true,
  })
  update?: Array<ChallengesUpdateWithWhereUniqueWithoutCategoriesInput>

  @Field(() => [ChallengesUpdateManyWithWhereWithoutCategoriesInput], {
    nullable: true,
  })
  updateMany?: Array<ChallengesUpdateManyWithWhereWithoutCategoriesInput>

  @Field(() => [ChallengesScalarWhereInput], { nullable: true })
  deleteMany?: Array<ChallengesScalarWhereInput>
}
