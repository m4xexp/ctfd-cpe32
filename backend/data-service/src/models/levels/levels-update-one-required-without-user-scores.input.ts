import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LevelsCreateWithoutUserScoresInput } from './levels-create-without-user-scores.input';
import { LevelsCreateOrConnectWithoutUserScoresInput } from './levels-create-or-connect-without-user-scores.input';
import { LevelsUpsertWithoutUserScoresInput } from './levels-upsert-without-user-scores.input';
import { LevelsWhereUniqueInput } from './levels-where-unique.input';
import { LevelsUpdateWithoutUserScoresInput } from './levels-update-without-user-scores.input';

@InputType()
export class LevelsUpdateOneRequiredWithoutUserScoresInput {

    @Field(() => LevelsCreateWithoutUserScoresInput, {nullable:true})
    create?: LevelsCreateWithoutUserScoresInput;

    @Field(() => LevelsCreateOrConnectWithoutUserScoresInput, {nullable:true})
    connectOrCreate?: LevelsCreateOrConnectWithoutUserScoresInput;

    @Field(() => LevelsUpsertWithoutUserScoresInput, {nullable:true})
    upsert?: LevelsUpsertWithoutUserScoresInput;

    @Field(() => LevelsWhereUniqueInput, {nullable:true})
    connect?: LevelsWhereUniqueInput;

    @Field(() => LevelsUpdateWithoutUserScoresInput, {nullable:true})
    update?: LevelsUpdateWithoutUserScoresInput;
}
