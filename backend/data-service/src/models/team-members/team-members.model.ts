import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Users } from '../users/users.model';
import { ID } from '@nestjs/graphql';
import { Teams } from '../teams/teams.model';

@ObjectType()
export class TeamMembers {

    @Field(() => Users, {nullable:false})
    users?: Users;

    @Field(() => ID, {nullable:false})
    user_id!: string;

    @Field(() => Teams, {nullable:false})
    teams?: Teams;

    @Field(() => String, {nullable:false})
    team_id!: string;

    @Field(() => String, {nullable:false,defaultValue:'member'})
    type!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    status!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
