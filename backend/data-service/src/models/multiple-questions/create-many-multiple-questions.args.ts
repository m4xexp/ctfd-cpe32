import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleQuestionsCreateManyInput } from './multiple-questions-create-many.input';

@ArgsType()
export class CreateManyMultipleQuestionsArgs {

    @Field(() => [MultipleQuestionsCreateManyInput], {nullable:false})
    data!: Array<MultipleQuestionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
