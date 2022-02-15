import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleQuestionsWhereUniqueInput } from './multiple-questions-where-unique.input';

@ArgsType()
export class FindUniqueMultipleQuestionsArgs {

    @Field(() => MultipleQuestionsWhereUniqueInput, {nullable:false})
    where!: MultipleQuestionsWhereUniqueInput;
}
