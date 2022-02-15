import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LevelsWhereInput } from './levels-where.input';

@ArgsType()
export class DeleteManyLevelsArgs {

    @Field(() => LevelsWhereInput, {nullable:true})
    where?: LevelsWhereInput;
}
