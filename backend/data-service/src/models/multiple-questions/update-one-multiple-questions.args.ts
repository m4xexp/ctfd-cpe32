import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleQuestionsUpdateInput } from './multiple-questions-update.input';
import { MultipleQuestionsWhereUniqueInput } from './multiple-questions-where-unique.input';

@ArgsType()
export class UpdateOneMultipleQuestionsArgs {

    @Field(() => MultipleQuestionsUpdateInput, {nullable:false})
    data!: MultipleQuestionsUpdateInput;

    @Field(() => MultipleQuestionsWhereUniqueInput, {nullable:false})
    where!: MultipleQuestionsWhereUniqueInput;
}
