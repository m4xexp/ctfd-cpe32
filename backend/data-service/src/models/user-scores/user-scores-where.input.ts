import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersRelationFilter } from '../users/users-relation-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { ChallengesRelationFilter } from '../challenges/challenges-relation-filter.input'
import { IntFilter } from '../prisma/int-filter.input'
import { FloatFilter } from '../prisma/float-filter.input'
import { LevelsRelationFilter } from '../levels/levels-relation-filter.input'
import { TypesRelationFilter } from '../types/types-relation-filter.input'
import { CategoriesRelationFilter } from '../categories/categories-relation-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class UserScoresWhereInput {
  @Field(() => [UserScoresWhereInput], { nullable: true })
  AND?: Array<UserScoresWhereInput>

  @Field(() => [UserScoresWhereInput], { nullable: true })
  OR?: Array<UserScoresWhereInput>

  @Field(() => [UserScoresWhereInput], { nullable: true })
  NOT?: Array<UserScoresWhereInput>

  @Field(() => UsersRelationFilter, { nullable: true })
  users?: UsersRelationFilter

  @Field(() => StringFilter, { nullable: true })
  user_id?: StringFilter

  @Field(() => ChallengesRelationFilter, { nullable: true })
  challenges?: ChallengesRelationFilter

  @Field(() => StringFilter, { nullable: true })
  challenge_id?: StringFilter

  @Field(() => IntFilter, { nullable: true })
  base_score?: IntFilter

  @Field(() => FloatFilter, { nullable: true })
  time_score?: FloatFilter

  @Field(() => LevelsRelationFilter, { nullable: true })
  levels?: LevelsRelationFilter

  @Field(() => StringFilter, { nullable: true })
  level_id?: StringFilter

  @Field(() => TypesRelationFilter, { nullable: true })
  types?: TypesRelationFilter

  @Field(() => StringFilter, { nullable: true })
  types_id?: StringFilter

  @Field(() => CategoriesRelationFilter, { nullable: true })
  categories?: CategoriesRelationFilter

  @Field(() => StringFilter, { nullable: true })
  categories_id?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}
