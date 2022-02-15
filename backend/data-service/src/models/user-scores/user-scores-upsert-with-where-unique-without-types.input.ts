import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input';
import { UserScoresUpdateWithoutTypesInput } from './user-scores-update-without-types.input';
import { UserScoresCreateWithoutTypesInput } from './user-scores-create-without-types.input';

@InputType()
export class UserScoresUpsertWithWhereUniqueWithoutTypesInput {

    @Field(() => UserScoresWhereUniqueInput, {nullable:false})
    where!: UserScoresWhereUniqueInput;

    @Field(() => UserScoresUpdateWithoutTypesInput, {nullable:false})
    update!: UserScoresUpdateWithoutTypesInput;

    @Field(() => UserScoresCreateWithoutTypesInput, {nullable:false})
    create!: UserScoresCreateWithoutTypesInput;
}
