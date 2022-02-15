import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserTutorialsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    user_id?: true;

    @Field(() => Boolean, {nullable:true})
    chapter_id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
