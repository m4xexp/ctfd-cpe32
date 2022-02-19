import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserBadgesCreateManyBadgesInput } from './user-badges-create-many-badges.input'

@InputType()
export class UserBadgesCreateManyBadgesInputEnvelope {
  @Field(() => [UserBadgesCreateManyBadgesInput], { nullable: false })
  data!: Array<UserBadgesCreateManyBadgesInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
