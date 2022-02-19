import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FlagQuestionsCreateWithoutChallengesInput } from './flag-questions-create-without-challenges.input'
import { FlagQuestionsCreateOrConnectWithoutChallengesInput } from './flag-questions-create-or-connect-without-challenges.input'
import { FlagQuestionsUpsertWithWhereUniqueWithoutChallengesInput } from './flag-questions-upsert-with-where-unique-without-challenges.input'
import { FlagQuestionsCreateManyChallengesInputEnvelope } from './flag-questions-create-many-challenges-input-envelope.input'
import { FlagQuestionsWhereUniqueInput } from './flag-questions-where-unique.input'
import { FlagQuestionsUpdateWithWhereUniqueWithoutChallengesInput } from './flag-questions-update-with-where-unique-without-challenges.input'
import { FlagQuestionsUpdateManyWithWhereWithoutChallengesInput } from './flag-questions-update-many-with-where-without-challenges.input'
import { FlagQuestionsScalarWhereInput } from './flag-questions-scalar-where.input'

@InputType()
export class FlagQuestionsUncheckedUpdateManyWithoutChallengesInput {
  @Field(() => [FlagQuestionsCreateWithoutChallengesInput], { nullable: true })
  create?: Array<FlagQuestionsCreateWithoutChallengesInput>

  @Field(() => [FlagQuestionsCreateOrConnectWithoutChallengesInput], {
    nullable: true,
  })
  connectOrCreate?: Array<FlagQuestionsCreateOrConnectWithoutChallengesInput>

  @Field(() => [FlagQuestionsUpsertWithWhereUniqueWithoutChallengesInput], {
    nullable: true,
  })
  upsert?: Array<FlagQuestionsUpsertWithWhereUniqueWithoutChallengesInput>

  @Field(() => FlagQuestionsCreateManyChallengesInputEnvelope, {
    nullable: true,
  })
  createMany?: FlagQuestionsCreateManyChallengesInputEnvelope

  @Field(() => [FlagQuestionsWhereUniqueInput], { nullable: true })
  set?: Array<FlagQuestionsWhereUniqueInput>

  @Field(() => [FlagQuestionsWhereUniqueInput], { nullable: true })
  disconnect?: Array<FlagQuestionsWhereUniqueInput>

  @Field(() => [FlagQuestionsWhereUniqueInput], { nullable: true })
  delete?: Array<FlagQuestionsWhereUniqueInput>

  @Field(() => [FlagQuestionsWhereUniqueInput], { nullable: true })
  connect?: Array<FlagQuestionsWhereUniqueInput>

  @Field(() => [FlagQuestionsUpdateWithWhereUniqueWithoutChallengesInput], {
    nullable: true,
  })
  update?: Array<FlagQuestionsUpdateWithWhereUniqueWithoutChallengesInput>

  @Field(() => [FlagQuestionsUpdateManyWithWhereWithoutChallengesInput], {
    nullable: true,
  })
  updateMany?: Array<FlagQuestionsUpdateManyWithWhereWithoutChallengesInput>

  @Field(() => [FlagQuestionsScalarWhereInput], { nullable: true })
  deleteMany?: Array<FlagQuestionsScalarWhereInput>
}
