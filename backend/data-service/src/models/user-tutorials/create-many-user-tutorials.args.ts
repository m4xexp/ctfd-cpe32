import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserTutorialsCreateManyInput } from './user-tutorials-create-many.input';

@ArgsType()
export class CreateManyUserTutorialsArgs {

    @Field(() => [UserTutorialsCreateManyInput], {nullable:false})
    data!: Array<UserTutorialsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
