import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortAnswerQuestionsUpdateInput } from './short-answer-questions-update.input';
import { ShortAnswerQuestionsWhereUniqueInput } from './short-answer-questions-where-unique.input';

@ArgsType()
export class UpdateOneShortAnswerQuestionsArgs {

    @Field(() => ShortAnswerQuestionsUpdateInput, {nullable:false})
    data!: ShortAnswerQuestionsUpdateInput;

    @Field(() => ShortAnswerQuestionsWhereUniqueInput, {nullable:false})
    where!: ShortAnswerQuestionsWhereUniqueInput;
}
