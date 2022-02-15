import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LevelsUpdateInput } from './levels-update.input';
import { LevelsWhereUniqueInput } from './levels-where-unique.input';

@ArgsType()
export class UpdateOneLevelsArgs {

    @Field(() => LevelsUpdateInput, {nullable:false})
    data!: LevelsUpdateInput;

    @Field(() => LevelsWhereUniqueInput, {nullable:false})
    where!: LevelsWhereUniqueInput;
}
