import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UserBadgesBadge_idUser_idCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  badge_id!: string

  @Field(() => String, { nullable: false })
  user_id!: string
}
