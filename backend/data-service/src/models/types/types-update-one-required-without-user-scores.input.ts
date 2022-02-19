import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TypesCreateWithoutUserScoresInput } from './types-create-without-user-scores.input'
import { TypesCreateOrConnectWithoutUserScoresInput } from './types-create-or-connect-without-user-scores.input'
import { TypesUpsertWithoutUserScoresInput } from './types-upsert-without-user-scores.input'
import { TypesWhereUniqueInput } from './types-where-unique.input'
import { TypesUpdateWithoutUserScoresInput } from './types-update-without-user-scores.input'

@InputType()
export class TypesUpdateOneRequiredWithoutUserScoresInput {
  @Field(() => TypesCreateWithoutUserScoresInput, { nullable: true })
  create?: TypesCreateWithoutUserScoresInput

  @Field(() => TypesCreateOrConnectWithoutUserScoresInput, { nullable: true })
  connectOrCreate?: TypesCreateOrConnectWithoutUserScoresInput

  @Field(() => TypesUpsertWithoutUserScoresInput, { nullable: true })
  upsert?: TypesUpsertWithoutUserScoresInput

  @Field(() => TypesWhereUniqueInput, { nullable: true })
  connect?: TypesWhereUniqueInput

  @Field(() => TypesUpdateWithoutUserScoresInput, { nullable: true })
  update?: TypesUpdateWithoutUserScoresInput
}
