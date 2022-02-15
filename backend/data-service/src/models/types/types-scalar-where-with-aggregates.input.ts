import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TypesScalarWhereWithAggregatesInput {

    @Field(() => [TypesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TypesScalarWhereWithAggregatesInput>;

    @Field(() => [TypesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TypesScalarWhereWithAggregatesInput>;

    @Field(() => [TypesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TypesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    types_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
