import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortAnswerQuestionsWhereInput } from './short-answer-questions-where.input';

@ArgsType()
export class DeleteManyShortAnswerQuestionsArgs {

    @Field(() => ShortAnswerQuestionsWhereInput, {nullable:true})
    where?: ShortAnswerQuestionsWhereInput;
}
