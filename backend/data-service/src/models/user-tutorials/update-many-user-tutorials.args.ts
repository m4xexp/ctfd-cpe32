import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserTutorialsUpdateManyMutationInput } from './user-tutorials-update-many-mutation.input';
import { UserTutorialsWhereInput } from './user-tutorials-where.input';

@ArgsType()
export class UpdateManyUserTutorialsArgs {

    @Field(() => UserTutorialsUpdateManyMutationInput, {nullable:false})
    data!: UserTutorialsUpdateManyMutationInput;

    @Field(() => UserTutorialsWhereInput, {nullable:true})
    where?: UserTutorialsWhereInput;
}
