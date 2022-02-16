import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class UserBadgesScalarWhereInput {
  @Field(() => [UserBadgesScalarWhereInput], { nullable: true })
  AND?: Array<UserBadgesScalarWhereInput>

  @Field(() => [UserBadgesScalarWhereInput], { nullable: true })
  OR?: Array<UserBadgesScalarWhereInput>

  @Field(() => [UserBadgesScalarWhereInput], { nullable: true })
  NOT?: Array<UserBadgesScalarWhereInput>

  @Field(() => StringFilter, { nullable: true })
  user_id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  badge_id?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}
