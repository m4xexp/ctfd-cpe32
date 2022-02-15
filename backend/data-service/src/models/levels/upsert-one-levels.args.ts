import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LevelsWhereUniqueInput } from './levels-where-unique.input';
import { LevelsCreateInput } from './levels-create.input';
import { LevelsUpdateInput } from './levels-update.input';

@ArgsType()
export class UpsertOneLevelsArgs {

    @Field(() => LevelsWhereUniqueInput, {nullable:false})
    where!: LevelsWhereUniqueInput;

    @Field(() => LevelsCreateInput, {nullable:false})
    create!: LevelsCreateInput;

    @Field(() => LevelsUpdateInput, {nullable:false})
    update!: LevelsUpdateInput;
}
