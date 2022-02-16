import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresUser_idChallenge_idCompoundUniqueInput } from './user-scores-user-id-challenge-id-compound-unique.input'

@InputType()
export class UserScoresWhereUniqueInput {
  @Field(() => UserScoresUser_idChallenge_idCompoundUniqueInput, {
    nullable: true,
  })
  user_id_challenge_id?: UserScoresUser_idChallenge_idCompoundUniqueInput
}
