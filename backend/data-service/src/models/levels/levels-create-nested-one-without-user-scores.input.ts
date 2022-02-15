import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LevelsCreateWithoutUserScoresInput } from './levels-create-without-user-scores.input';
import { LevelsCreateOrConnectWithoutUserScoresInput } from './levels-create-or-connect-without-user-scores.input';
import { LevelsWhereUniqueInput } from './levels-where-unique.input';

@InputType()
export class LevelsCreateNestedOneWithoutUserScoresInput {

    @Field(() => LevelsCreateWithoutUserScoresInput, {nullable:true})
    create?: LevelsCreateWithoutUserScoresInput;

    @Field(() => LevelsCreateOrConnectWithoutUserScoresInput, {nullable:true})
    connectOrCreate?: LevelsCreateOrConnectWithoutUserScoresInput;

    @Field(() => LevelsWhereUniqueInput, {nullable:true})
    connect?: LevelsWhereUniqueInput;
}
