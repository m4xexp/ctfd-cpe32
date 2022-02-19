import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresCreateManyLevelsInput } from './user-scores-create-many-levels.input'

@InputType()
export class UserScoresCreateManyLevelsInputEnvelope {
  @Field(() => [UserScoresCreateManyLevelsInput], { nullable: false })
  data!: Array<UserScoresCreateManyLevelsInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
