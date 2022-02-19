import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserBadgesBadge_idUser_idCompoundUniqueInput } from './user-badges-badge-id-user-id-compound-unique.input'

@InputType()
export class UserBadgesWhereUniqueInput {
  @Field(() => UserBadgesBadge_idUser_idCompoundUniqueInput, { nullable: true })
  badge_id_user_id?: UserBadgesBadge_idUser_idCompoundUniqueInput
}
