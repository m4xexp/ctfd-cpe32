import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortAnswerQuestionsCreateManyInput } from './short-answer-questions-create-many.input';

@ArgsType()
export class CreateManyShortAnswerQuestionsArgs {

    @Field(() => [ShortAnswerQuestionsCreateManyInput], {nullable:false})
    data!: Array<ShortAnswerQuestionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
