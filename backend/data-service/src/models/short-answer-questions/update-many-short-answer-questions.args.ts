import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortAnswerQuestionsUpdateManyMutationInput } from './short-answer-questions-update-many-mutation.input';
import { ShortAnswerQuestionsWhereInput } from './short-answer-questions-where.input';

@ArgsType()
export class UpdateManyShortAnswerQuestionsArgs {

    @Field(() => ShortAnswerQuestionsUpdateManyMutationInput, {nullable:false})
    data!: ShortAnswerQuestionsUpdateManyMutationInput;

    @Field(() => ShortAnswerQuestionsWhereInput, {nullable:true})
    where?: ShortAnswerQuestionsWhereInput;
}
