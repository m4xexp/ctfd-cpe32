import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LevelsScalarWhereWithAggregatesInput {

    @Field(() => [LevelsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LevelsScalarWhereWithAggregatesInput>;

    @Field(() => [LevelsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LevelsScalarWhereWithAggregatesInput>;

    @Field(() => [LevelsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LevelsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    level_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
