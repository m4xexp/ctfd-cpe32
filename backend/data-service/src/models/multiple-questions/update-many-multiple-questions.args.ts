import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleQuestionsUpdateManyMutationInput } from './multiple-questions-update-many-mutation.input';
import { MultipleQuestionsWhereInput } from './multiple-questions-where.input';

@ArgsType()
export class UpdateManyMultipleQuestionsArgs {

    @Field(() => MultipleQuestionsUpdateManyMutationInput, {nullable:false})
    data!: MultipleQuestionsUpdateManyMutationInput;

    @Field(() => MultipleQuestionsWhereInput, {nullable:true})
    where?: MultipleQuestionsWhereInput;
}
