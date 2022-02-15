import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgesWhereInput } from './badges-where.input';

@ArgsType()
export class DeleteManyBadgesArgs {

    @Field(() => BadgesWhereInput, {nullable:true})
    where?: BadgesWhereInput;
}
