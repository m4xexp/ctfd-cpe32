import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortAnswerQuestionsCreateInput } from './short-answer-questions-create.input';

@ArgsType()
export class CreateOneShortAnswerQuestionsArgs {

    @Field(() => ShortAnswerQuestionsCreateInput, {nullable:false})
    data!: ShortAnswerQuestionsCreateInput;
}
