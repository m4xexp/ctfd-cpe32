import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ShortAnswerQuestionsCreateWithoutChallengesInput } from './short-answer-questions-create-without-challenges.input'
import { ShortAnswerQuestionsCreateOrConnectWithoutChallengesInput } from './short-answer-questions-create-or-connect-without-challenges.input'
import { ShortAnswerQuestionsUpsertWithWhereUniqueWithoutChallengesInput } from './short-answer-questions-upsert-with-where-unique-without-challenges.input'
import { ShortAnswerQuestionsCreateManyChallengesInputEnvelope } from './short-answer-questions-create-many-challenges-input-envelope.input'
import { ShortAnswerQuestionsWhereUniqueInput } from './short-answer-questions-where-unique.input'
import { ShortAnswerQuestionsUpdateWithWhereUniqueWithoutChallengesInput } from './short-answer-questions-update-with-where-unique-without-challenges.input'
import { ShortAnswerQuestionsUpdateManyWithWhereWithoutChallengesInput } from './short-answer-questions-update-many-with-where-without-challenges.input'
import { ShortAnswerQuestionsScalarWhereInput } from './short-answer-questions-scalar-where.input'

@InputType()
export class ShortAnswerQuestionsUncheckedUpdateManyWithoutChallengesInput {
  @Field(() => [ShortAnswerQuestionsCreateWithoutChallengesInput], {
    nullable: true,
  })
  create?: Array<ShortAnswerQuestionsCreateWithoutChallengesInput>

  @Field(() => [ShortAnswerQuestionsCreateOrConnectWithoutChallengesInput], {
    nullable: true,
  })
  connectOrCreate?: Array<ShortAnswerQuestionsCreateOrConnectWithoutChallengesInput>

  @Field(
    () => [ShortAnswerQuestionsUpsertWithWhereUniqueWithoutChallengesInput],
    { nullable: true },
  )
  upsert?: Array<ShortAnswerQuestionsUpsertWithWhereUniqueWithoutChallengesInput>

  @Field(() => ShortAnswerQuestionsCreateManyChallengesInputEnvelope, {
    nullable: true,
  })
  createMany?: ShortAnswerQuestionsCreateManyChallengesInputEnvelope

  @Field(() => [ShortAnswerQuestionsWhereUniqueInput], { nullable: true })
  set?: Array<ShortAnswerQuestionsWhereUniqueInput>

  @Field(() => [ShortAnswerQuestionsWhereUniqueInput], { nullable: true })
  disconnect?: Array<ShortAnswerQuestionsWhereUniqueInput>

  @Field(() => [ShortAnswerQuestionsWhereUniqueInput], { nullable: true })
  delete?: Array<ShortAnswerQuestionsWhereUniqueInput>

  @Field(() => [ShortAnswerQuestionsWhereUniqueInput], { nullable: true })
  connect?: Array<ShortAnswerQuestionsWhereUniqueInput>

  @Field(
    () => [ShortAnswerQuestionsUpdateWithWhereUniqueWithoutChallengesInput],
    { nullable: true },
  )
  update?: Array<ShortAnswerQuestionsUpdateWithWhereUniqueWithoutChallengesInput>

  @Field(
    () => [ShortAnswerQuestionsUpdateManyWithWhereWithoutChallengesInput],
    { nullable: true },
  )
  updateMany?: Array<ShortAnswerQuestionsUpdateManyWithWhereWithoutChallengesInput>

  @Field(() => [ShortAnswerQuestionsScalarWhereInput], { nullable: true })
  deleteMany?: Array<ShortAnswerQuestionsScalarWhereInput>
}
