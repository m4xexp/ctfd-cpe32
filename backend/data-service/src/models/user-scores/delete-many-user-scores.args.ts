import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserScoresWhereInput } from './user-scores-where.input';

@ArgsType()
export class DeleteManyUserScoresArgs {

    @Field(() => UserScoresWhereInput, {nullable:true})
    where?: UserScoresWhereInput;
}
