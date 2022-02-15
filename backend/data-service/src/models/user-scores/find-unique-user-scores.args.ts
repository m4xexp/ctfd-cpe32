import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input';

@ArgsType()
export class FindUniqueUserScoresArgs {

    @Field(() => UserScoresWhereUniqueInput, {nullable:false})
    where!: UserScoresWhereUniqueInput;
}
