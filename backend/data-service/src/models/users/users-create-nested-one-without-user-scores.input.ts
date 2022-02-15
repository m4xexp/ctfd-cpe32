import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutUserScoresInput } from './users-create-without-user-scores.input';
import { UsersCreateOrConnectWithoutUserScoresInput } from './users-create-or-connect-without-user-scores.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class UsersCreateNestedOneWithoutUserScoresInput {

    @Field(() => UsersCreateWithoutUserScoresInput, {nullable:true})
    create?: UsersCreateWithoutUserScoresInput;

    @Field(() => UsersCreateOrConnectWithoutUserScoresInput, {nullable:true})
    connectOrCreate?: UsersCreateOrConnectWithoutUserScoresInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    connect?: UsersWhereUniqueInput;
}
