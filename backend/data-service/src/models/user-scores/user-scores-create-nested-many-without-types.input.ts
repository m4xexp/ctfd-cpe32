import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresCreateWithoutTypesInput } from './user-scores-create-without-types.input'
import { UserScoresCreateOrConnectWithoutTypesInput } from './user-scores-create-or-connect-without-types.input'
import { UserScoresCreateManyTypesInputEnvelope } from './user-scores-create-many-types-input-envelope.input'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'

@InputType()
export class UserScoresCreateNestedManyWithoutTypesInput {
  @Field(() => [UserScoresCreateWithoutTypesInput], { nullable: true })
  create?: Array<UserScoresCreateWithoutTypesInput>

  @Field(() => [UserScoresCreateOrConnectWithoutTypesInput], { nullable: true })
  connectOrCreate?: Array<UserScoresCreateOrConnectWithoutTypesInput>

  @Field(() => UserScoresCreateManyTypesInputEnvelope, { nullable: true })
  createMany?: UserScoresCreateManyTypesInputEnvelope

  @Field(() => [UserScoresWhereUniqueInput], { nullable: true })
  connect?: Array<UserScoresWhereUniqueInput>
}
