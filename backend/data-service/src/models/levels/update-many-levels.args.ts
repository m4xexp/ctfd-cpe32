import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LevelsUpdateManyMutationInput } from './levels-update-many-mutation.input';
import { LevelsWhereInput } from './levels-where.input';

@ArgsType()
export class UpdateManyLevelsArgs {

    @Field(() => LevelsUpdateManyMutationInput, {nullable:false})
    data!: LevelsUpdateManyMutationInput;

    @Field(() => LevelsWhereInput, {nullable:true})
    where?: LevelsWhereInput;
}
