import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { BoolFilter } from '../prisma/bool-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { UserBadgesListRelationFilter } from '../user-badges/user-badges-list-relation-filter.input'
import { EventsListRelationFilter } from '../events/events-list-relation-filter.input'
import { ChallengesListRelationFilter } from '../challenges/challenges-list-relation-filter.input'

@InputType()
export class BadgesWhereInput {
  @Field(() => [BadgesWhereInput], { nullable: true })
  AND?: Array<BadgesWhereInput>

  @Field(() => [BadgesWhereInput], { nullable: true })
  OR?: Array<BadgesWhereInput>

  @Field(() => [BadgesWhereInput], { nullable: true })
  NOT?: Array<BadgesWhereInput>

  @Field(() => StringFilter, { nullable: true })
  badge_id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  condition?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  link?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter

  @Field(() => BoolFilter, { nullable: true })
  status?: BoolFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => UserBadgesListRelationFilter, { nullable: true })
  userBadges?: UserBadgesListRelationFilter

  @Field(() => EventsListRelationFilter, { nullable: true })
  events?: EventsListRelationFilter

  @Field(() => ChallengesListRelationFilter, { nullable: true })
  challenges?: ChallengesListRelationFilter
}
