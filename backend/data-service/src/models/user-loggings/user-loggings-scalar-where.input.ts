import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserLoggingsScalarWhereInput {

    @Field(() => [UserLoggingsScalarWhereInput], {nullable:true})
    AND?: Array<UserLoggingsScalarWhereInput>;

    @Field(() => [UserLoggingsScalarWhereInput], {nullable:true})
    OR?: Array<UserLoggingsScalarWhereInput>;

    @Field(() => [UserLoggingsScalarWhereInput], {nullable:true})
    NOT?: Array<UserLoggingsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    log_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    action?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ip?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
