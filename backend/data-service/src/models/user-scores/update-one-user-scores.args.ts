import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserScoresUpdateInput } from './user-scores-update.input';
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input';

@ArgsType()
export class UpdateOneUserScoresArgs {

    @Field(() => UserScoresUpdateInput, {nullable:false})
    data!: UserScoresUpdateInput;

    @Field(() => UserScoresWhereUniqueInput, {nullable:false})
    where!: UserScoresWhereUniqueInput;
}
