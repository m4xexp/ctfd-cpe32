import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgesWhereInput } from './badges-where.input';
import { BadgesOrderByWithRelationInput } from './badges-order-by-with-relation.input';
import { BadgesWhereUniqueInput } from './badges-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BadgesScalarFieldEnum } from './badges-scalar-field.enum';

@ArgsType()
export class FindFirstBadgesArgs {

    @Field(() => BadgesWhereInput, {nullable:true})
    where?: BadgesWhereInput;

    @Field(() => [BadgesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BadgesOrderByWithRelationInput>;

    @Field(() => BadgesWhereUniqueInput, {nullable:true})
    cursor?: BadgesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BadgesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BadgesScalarFieldEnum>;
}
