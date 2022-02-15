import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleQuestionsCreateInput } from './multiple-questions-create.input';

@ArgsType()
export class CreateOneMultipleQuestionsArgs {

    @Field(() => MultipleQuestionsCreateInput, {nullable:false})
    data!: MultipleQuestionsCreateInput;
}
