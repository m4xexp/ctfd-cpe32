import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LevelsWhereUniqueInput } from './levels-where-unique.input';

@ArgsType()
export class FindUniqueLevelsArgs {

    @Field(() => LevelsWhereUniqueInput, {nullable:false})
    where!: LevelsWhereUniqueInput;
}
