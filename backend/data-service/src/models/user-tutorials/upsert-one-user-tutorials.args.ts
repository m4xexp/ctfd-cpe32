import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input';
import { UserTutorialsCreateInput } from './user-tutorials-create.input';
import { UserTutorialsUpdateInput } from './user-tutorials-update.input';

@ArgsType()
export class UpsertOneUserTutorialsArgs {

    @Field(() => UserTutorialsWhereUniqueInput, {nullable:false})
    where!: UserTutorialsWhereUniqueInput;

    @Field(() => UserTutorialsCreateInput, {nullable:false})
    create!: UserTutorialsCreateInput;

    @Field(() => UserTutorialsUpdateInput, {nullable:false})
    update!: UserTutorialsUpdateInput;
}
