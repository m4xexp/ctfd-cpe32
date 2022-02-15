import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FlagQuestionsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    flag_question_id?: string;
}
