import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { MultipleQuestionsCreateWithoutChallengesInput } from './multiple-questions-create-without-challenges.input'
import { MultipleQuestionsCreateOrConnectWithoutChallengesInput } from './multiple-questions-create-or-connect-without-challenges.input'
import { MultipleQuestionsUpsertWithWhereUniqueWithoutChallengesInput } from './multiple-questions-upsert-with-where-unique-without-challenges.input'
import { MultipleQuestionsCreateManyChallengesInputEnvelope } from './multiple-questions-create-many-challenges-input-envelope.input'
import { MultipleQuestionsWhereUniqueInput } from './multiple-questions-where-unique.input'
import { MultipleQuestionsUpdateWithWhereUniqueWithoutChallengesInput } from './multiple-questions-update-with-where-unique-without-challenges.input'
import { MultipleQuestionsUpdateManyWithWhereWithoutChallengesInput } from './multiple-questions-update-many-with-where-without-challenges.input'
import { MultipleQuestionsScalarWhereInput } from './multiple-questions-scalar-where.input'

@InputType()
export class MultipleQuestionsUncheckedUpdateManyWithoutChallengesInput {
  @Field(() => [MultipleQuestionsCreateWithoutChallengesInput], {
    nullable: true,
  })
  create?: Array<MultipleQuestionsCreateWithoutChallengesInput>

  @Field(() => [MultipleQuestionsCreateOrConnectWithoutChallengesInput], {
    nullable: true,
  })
  connectOrCreate?: Array<MultipleQuestionsCreateOrConnectWithoutChallengesInput>

  @Field(() => [MultipleQuestionsUpsertWithWhereUniqueWithoutChallengesInput], {
    nullable: true,
  })
  upsert?: Array<MultipleQuestionsUpsertWithWhereUniqueWithoutChallengesInput>

  @Field(() => MultipleQuestionsCreateManyChallengesInputEnvelope, {
    nullable: true,
  })
  createMany?: MultipleQuestionsCreateManyChallengesInputEnvelope

  @Field(() => [MultipleQuestionsWhereUniqueInput], { nullable: true })
  set?: Array<MultipleQuestionsWhereUniqueInput>

  @Field(() => [MultipleQuestionsWhereUniqueInput], { nullable: true })
  disconnect?: Array<MultipleQuestionsWhereUniqueInput>

  @Field(() => [MultipleQuestionsWhereUniqueInput], { nullable: true })
  delete?: Array<MultipleQuestionsWhereUniqueInput>

  @Field(() => [MultipleQuestionsWhereUniqueInput], { nullable: true })
  connect?: Array<MultipleQuestionsWhereUniqueInput>

  @Field(() => [MultipleQuestionsUpdateWithWhereUniqueWithoutChallengesInput], {
    nullable: true,
  })
  update?: Array<MultipleQuestionsUpdateWithWhereUniqueWithoutChallengesInput>

  @Field(() => [MultipleQuestionsUpdateManyWithWhereWithoutChallengesInput], {
    nullable: true,
  })
  updateMany?: Array<MultipleQuestionsUpdateManyWithWhereWithoutChallengesInput>

  @Field(() => [MultipleQuestionsScalarWhereInput], { nullable: true })
  deleteMany?: Array<MultipleQuestionsScalarWhereInput>
}
