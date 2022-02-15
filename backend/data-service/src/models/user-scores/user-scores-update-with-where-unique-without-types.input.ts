import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input';
import { UserScoresUpdateWithoutTypesInput } from './user-scores-update-without-types.input';

@InputType()
export class UserScoresUpdateWithWhereUniqueWithoutTypesInput {

    @Field(() => UserScoresWhereUniqueInput, {nullable:false})
    where!: UserScoresWhereUniqueInput;

    @Field(() => UserScoresUpdateWithoutTypesInput, {nullable:false})
    data!: UserScoresUpdateWithoutTypesInput;
}
