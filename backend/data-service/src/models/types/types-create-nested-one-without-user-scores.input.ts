import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TypesCreateWithoutUserScoresInput } from './types-create-without-user-scores.input'
import { TypesCreateOrConnectWithoutUserScoresInput } from './types-create-or-connect-without-user-scores.input'
import { TypesWhereUniqueInput } from './types-where-unique.input'

@InputType()
export class TypesCreateNestedOneWithoutUserScoresInput {
  @Field(() => TypesCreateWithoutUserScoresInput, { nullable: true })
  create?: TypesCreateWithoutUserScoresInput

  @Field(() => TypesCreateOrConnectWithoutUserScoresInput, { nullable: true })
  connectOrCreate?: TypesCreateOrConnectWithoutUserScoresInput

  @Field(() => TypesWhereUniqueInput, { nullable: true })
  connect?: TypesWhereUniqueInput
}
