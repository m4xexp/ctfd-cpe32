import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TypesUpdateWithoutUserScoresInput } from './types-update-without-user-scores.input'
import { TypesCreateWithoutUserScoresInput } from './types-create-without-user-scores.input'

@InputType()
export class TypesUpsertWithoutUserScoresInput {
  @Field(() => TypesUpdateWithoutUserScoresInput, { nullable: false })
  update!: TypesUpdateWithoutUserScoresInput

  @Field(() => TypesCreateWithoutUserScoresInput, { nullable: false })
  create!: TypesCreateWithoutUserScoresInput
}
