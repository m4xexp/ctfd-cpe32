import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlagQuestionsWhereUniqueInput } from './flag-questions-where-unique.input';
import { FlagQuestionsCreateInput } from './flag-questions-create.input';
import { FlagQuestionsUpdateInput } from './flag-questions-update.input';

@ArgsType()
export class UpsertOneFlagQuestionsArgs {

    @Field(() => FlagQuestionsWhereUniqueInput, {nullable:false})
    where!: FlagQuestionsWhereUniqueInput;

    @Field(() => FlagQuestionsCreateInput, {nullable:false})
    create!: FlagQuestionsCreateInput;

    @Field(() => FlagQuestionsUpdateInput, {nullable:false})
    update!: FlagQuestionsUpdateInput;
}
