import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScoresListRelationFilter } from '../user-scores/user-scores-list-relation-filter.input';
import { ChallengesListRelationFilter } from '../challenges/challenges-list-relation-filter.input';

@InputType()
export class TypesWhereInput {

    @Field(() => [TypesWhereInput], {nullable:true})
    AND?: Array<TypesWhereInput>;

    @Field(() => [TypesWhereInput], {nullable:true})
    OR?: Array<TypesWhereInput>;

    @Field(() => [TypesWhereInput], {nullable:true})
    NOT?: Array<TypesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    types_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScoresListRelationFilter, {nullable:true})
    userScores?: UserScoresListRelationFilter;

    @Field(() => ChallengesListRelationFilter, {nullable:true})
    challenges?: ChallengesListRelationFilter;
}
