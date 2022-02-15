import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionCreateManyMultipleQuestionsInput } from './multiple-choice-question-create-many-multiple-questions.input';

@InputType()
export class MultipleChoiceQuestionCreateManyMultipleQuestionsInputEnvelope {

    @Field(() => [MultipleChoiceQuestionCreateManyMultipleQuestionsInput], {nullable:false})
    data!: Array<MultipleChoiceQuestionCreateManyMultipleQuestionsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
