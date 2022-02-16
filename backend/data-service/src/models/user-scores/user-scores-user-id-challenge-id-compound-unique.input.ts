import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UserScoresUser_idChallenge_idCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  user_id!: string

  @Field(() => String, { nullable: false })
  challenge_id!: string
}
