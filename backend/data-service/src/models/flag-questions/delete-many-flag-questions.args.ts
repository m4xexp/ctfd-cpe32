import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlagQuestionsWhereInput } from './flag-questions-where.input';

@ArgsType()
export class DeleteManyFlagQuestionsArgs {

    @Field(() => FlagQuestionsWhereInput, {nullable:true})
    where?: FlagQuestionsWhereInput;
}
