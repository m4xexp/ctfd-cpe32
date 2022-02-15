import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserLoggingsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    log_id?: string;
}
