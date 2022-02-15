import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserTutorialsScalarWhereInput {

    @Field(() => [UserTutorialsScalarWhereInput], {nullable:true})
    AND?: Array<UserTutorialsScalarWhereInput>;

    @Field(() => [UserTutorialsScalarWhereInput], {nullable:true})
    OR?: Array<UserTutorialsScalarWhereInput>;

    @Field(() => [UserTutorialsScalarWhereInput], {nullable:true})
    NOT?: Array<UserTutorialsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    chapter_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
