import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ChallengesScalarWhereInput {

    @Field(() => [ChallengesScalarWhereInput], {nullable:true})
    AND?: Array<ChallengesScalarWhereInput>;

    @Field(() => [ChallengesScalarWhereInput], {nullable:true})
    OR?: Array<ChallengesScalarWhereInput>;

    @Field(() => [ChallengesScalarWhereInput], {nullable:true})
    NOT?: Array<ChallengesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    challenge_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    question?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    level_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    types_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categories_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    award_badge?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    scorce?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_time?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_cost?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
