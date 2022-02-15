import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortAnswerQuestionsWhereUniqueInput } from './short-answer-questions-where-unique.input';
import { ShortAnswerQuestionsCreateInput } from './short-answer-questions-create.input';
import { ShortAnswerQuestionsUpdateInput } from './short-answer-questions-update.input';

@ArgsType()
export class UpsertOneShortAnswerQuestionsArgs {

    @Field(() => ShortAnswerQuestionsWhereUniqueInput, {nullable:false})
    where!: ShortAnswerQuestionsWhereUniqueInput;

    @Field(() => ShortAnswerQuestionsCreateInput, {nullable:false})
    create!: ShortAnswerQuestionsCreateInput;

    @Field(() => ShortAnswerQuestionsUpdateInput, {nullable:false})
    update!: ShortAnswerQuestionsUpdateInput;
}
