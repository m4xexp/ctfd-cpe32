import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresCreateManyTypesInput } from './user-scores-create-many-types.input'

@InputType()
export class UserScoresCreateManyTypesInputEnvelope {
  @Field(() => [UserScoresCreateManyTypesInput], { nullable: false })
  data!: Array<UserScoresCreateManyTypesInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
