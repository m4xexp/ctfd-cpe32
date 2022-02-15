import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShortAnswerQuestionsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    short_answer_question_id?: string;
}
