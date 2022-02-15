import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserTutorialsScalarWhereInput } from './user-tutorials-scalar-where.input';
import { UserTutorialsUpdateManyMutationInput } from './user-tutorials-update-many-mutation.input';

@InputType()
export class UserTutorialsUpdateManyWithWhereWithoutTutorialChapterDatasInput {

    @Field(() => UserTutorialsScalarWhereInput, {nullable:false})
    where!: UserTutorialsScalarWhereInput;

    @Field(() => UserTutorialsUpdateManyMutationInput, {nullable:false})
    data!: UserTutorialsUpdateManyMutationInput;
}
