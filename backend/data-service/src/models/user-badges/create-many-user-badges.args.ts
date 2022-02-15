import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBadgesCreateManyInput } from './user-badges-create-many.input';

@ArgsType()
export class CreateManyUserBadgesArgs {

    @Field(() => [UserBadgesCreateManyInput], {nullable:false})
    data!: Array<UserBadgesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
