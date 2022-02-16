import { registerEnumType } from '@nestjs/graphql'

export enum ChallengesScalarFieldEnum {
  challenge_id = 'challenge_id',
  name = 'name',
  question = 'question',
  description = 'description',
  level_id = 'level_id',
  types_id = 'types_id',
  categories_id = 'categories_id',
  award_badge = 'award_badge',
  scorce = 'scorce',
  max_time = 'max_time',
  max_cost = 'max_cost',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(ChallengesScalarFieldEnum, {
  name: 'ChallengesScalarFieldEnum',
  description: undefined,
})
