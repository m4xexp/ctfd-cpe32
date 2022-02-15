import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LevelsWhereInput } from './levels-where.input';
import { LevelsOrderByWithRelationInput } from './levels-order-by-with-relation.input';
import { LevelsWhereUniqueInput } from './levels-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LevelsScalarFieldEnum } from './levels-scalar-field.enum';

@ArgsType()
export class FindManyLevelsArgs {

    @Field(() => LevelsWhereInput, {nullable:true})
    where?: LevelsWhereInput;

    @Field(() => [LevelsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LevelsOrderByWithRelationInput>;

    @Field(() => LevelsWhereUniqueInput, {nullable:true})
    cursor?: LevelsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LevelsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LevelsScalarFieldEnum>;
}
