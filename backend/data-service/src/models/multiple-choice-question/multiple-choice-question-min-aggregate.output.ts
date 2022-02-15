import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MultipleChoiceQuestionMinAggregate {

    @Field(() => String, {nullable:true})
    multiple_choice_question_id?: string;

    @Field(() => String, {nullable:true})
    multiple_question_id?: string;

    @Field(() => String, {nullable:true})
    answer?: string;

    @Field(() => Boolean, {nullable:true})
    correct_flag?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
