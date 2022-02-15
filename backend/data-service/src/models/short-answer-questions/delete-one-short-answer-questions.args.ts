import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortAnswerQuestionsWhereUniqueInput } from './short-answer-questions-where-unique.input';

@ArgsType()
export class DeleteOneShortAnswerQuestionsArgs {

    @Field(() => ShortAnswerQuestionsWhereUniqueInput, {nullable:false})
    where!: ShortAnswerQuestionsWhereUniqueInput;
}
