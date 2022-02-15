import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleQuestionsWhereInput } from './multiple-questions-where.input';

@ArgsType()
export class DeleteManyMultipleQuestionsArgs {

    @Field(() => MultipleQuestionsWhereInput, {nullable:true})
    where?: MultipleQuestionsWhereInput;
}
