import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class TeamMembersUncheckedCreateWithoutUsersInput {
  @Field(() => String, { nullable: false })
  team_id!: string

  @Field(() => String, { nullable: true })
  type?: string

  @Field(() => Boolean, { nullable: true })
  status?: boolean

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
