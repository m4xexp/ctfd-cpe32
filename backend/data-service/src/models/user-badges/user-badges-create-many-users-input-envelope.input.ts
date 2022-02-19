import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserBadgesCreateManyUsersInput } from './user-badges-create-many-users.input'

@InputType()
export class UserBadgesCreateManyUsersInputEnvelope {
  @Field(() => [UserBadgesCreateManyUsersInput], { nullable: false })
  data!: Array<UserBadgesCreateManyUsersInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
