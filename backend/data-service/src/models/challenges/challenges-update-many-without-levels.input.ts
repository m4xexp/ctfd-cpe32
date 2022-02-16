import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesCreateWithoutLevelsInput } from './challenges-create-without-levels.input'
import { ChallengesCreateOrConnectWithoutLevelsInput } from './challenges-create-or-connect-without-levels.input'
import { ChallengesUpsertWithWhereUniqueWithoutLevelsInput } from './challenges-upsert-with-where-unique-without-levels.input'
import { ChallengesCreateManyLevelsInputEnvelope } from './challenges-create-many-levels-input-envelope.input'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesUpdateWithWhereUniqueWithoutLevelsInput } from './challenges-update-with-where-unique-without-levels.input'
import { ChallengesUpdateManyWithWhereWithoutLevelsInput } from './challenges-update-many-with-where-without-levels.input'
import { ChallengesScalarWhereInput } from './challenges-scalar-where.input'

@InputType()
export class ChallengesUpdateManyWithoutLevelsInput {
  @Field(() => [ChallengesCreateWithoutLevelsInput], { nullable: true })
  create?: Array<ChallengesCreateWithoutLevelsInput>

  @Field(() => [ChallengesCreateOrConnectWithoutLevelsInput], {
    nullable: true,
  })
  connectOrCreate?: Array<ChallengesCreateOrConnectWithoutLevelsInput>

  @Field(() => [ChallengesUpsertWithWhereUniqueWithoutLevelsInput], {
    nullable: true,
  })
  upsert?: Array<ChallengesUpsertWithWhereUniqueWithoutLevelsInput>

  @Field(() => ChallengesCreateManyLevelsInputEnvelope, { nullable: true })
  createMany?: ChallengesCreateManyLevelsInputEnvelope

  @Field(() => [ChallengesWhereUniqueInput], { nullable: true })
  set?: Array<ChallengesWhereUniqueInput>

  @Field(() => [ChallengesWhereUniqueInput], { nullable: true })
  disconnect?: Array<ChallengesWhereUniqueInput>

  @Field(() => [ChallengesWhereUniqueInput], { nullable: true })
  delete?: Array<ChallengesWhereUniqueInput>

  @Field(() => [ChallengesWhereUniqueInput], { nullable: true })
  connect?: Array<ChallengesWhereUniqueInput>

  @Field(() => [ChallengesUpdateWithWhereUniqueWithoutLevelsInput], {
    nullable: true,
  })
  update?: Array<ChallengesUpdateWithWhereUniqueWithoutLevelsInput>

  @Field(() => [ChallengesUpdateManyWithWhereWithoutLevelsInput], {
    nullable: true,
  })
  updateMany?: Array<ChallengesUpdateManyWithWhereWithoutLevelsInput>

  @Field(() => [ChallengesScalarWhereInput], { nullable: true })
  deleteMany?: Array<ChallengesScalarWhereInput>
}
