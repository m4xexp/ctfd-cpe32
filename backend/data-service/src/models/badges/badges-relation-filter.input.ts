import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgesWhereInput } from './badges-where.input';

@InputType()
export class BadgesRelationFilter {

    @Field(() => BadgesWhereInput, {nullable:true})
    is?: BadgesWhereInput;

    @Field(() => BadgesWhereInput, {nullable:true})
    isNot?: BadgesWhereInput;
}
