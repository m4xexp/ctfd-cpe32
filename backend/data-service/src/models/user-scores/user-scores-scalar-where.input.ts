import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserScoresScalarWhereInput {

    @Field(() => [UserScoresScalarWhereInput], {nullable:true})
    AND?: Array<UserScoresScalarWhereInput>;

    @Field(() => [UserScoresScalarWhereInput], {nullable:true})
    OR?: Array<UserScoresScalarWhereInput>;

    @Field(() => [UserScoresScalarWhereInput], {nullable:true})
    NOT?: Array<UserScoresScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    challenge_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    base_score?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    time_score?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    level_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    types_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categories_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
