import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresCreateWithoutLevelsInput } from './user-scores-create-without-levels.input'
import { UserScoresCreateOrConnectWithoutLevelsInput } from './user-scores-create-or-connect-without-levels.input'
import { UserScoresCreateManyLevelsInputEnvelope } from './user-scores-create-many-levels-input-envelope.input'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'

@InputType()
export class UserScoresCreateNestedManyWithoutLevelsInput {
  @Field(() => [UserScoresCreateWithoutLevelsInput], { nullable: true })
  create?: Array<UserScoresCreateWithoutLevelsInput>

  @Field(() => [UserScoresCreateOrConnectWithoutLevelsInput], {
    nullable: true,
  })
  connectOrCreate?: Array<UserScoresCreateOrConnectWithoutLevelsInput>

  @Field(() => UserScoresCreateManyLevelsInputEnvelope, { nullable: true })
  createMany?: UserScoresCreateManyLevelsInputEnvelope

  @Field(() => [UserScoresWhereUniqueInput], { nullable: true })
  connect?: Array<UserScoresWhereUniqueInput>
}
