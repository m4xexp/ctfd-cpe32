import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgesWhereUniqueInput } from './badges-where-unique.input';
import { BadgesCreateInput } from './badges-create.input';
import { BadgesUpdateInput } from './badges-update.input';

@ArgsType()
export class UpsertOneBadgesArgs {

    @Field(() => BadgesWhereUniqueInput, {nullable:false})
    where!: BadgesWhereUniqueInput;

    @Field(() => BadgesCreateInput, {nullable:false})
    create!: BadgesCreateInput;

    @Field(() => BadgesUpdateInput, {nullable:false})
    update!: BadgesUpdateInput;
}
