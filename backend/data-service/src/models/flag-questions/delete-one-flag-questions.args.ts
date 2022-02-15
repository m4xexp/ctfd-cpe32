import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlagQuestionsWhereUniqueInput } from './flag-questions-where-unique.input';

@ArgsType()
export class DeleteOneFlagQuestionsArgs {

    @Field(() => FlagQuestionsWhereUniqueInput, {nullable:false})
    where!: FlagQuestionsWhereUniqueInput;
}
