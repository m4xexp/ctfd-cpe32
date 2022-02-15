import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input';
import { UserTutorialsCreateWithoutTutorialChapterDatasInput } from './user-tutorials-create-without-tutorial-chapter-datas.input';

@InputType()
export class UserTutorialsCreateOrConnectWithoutTutorialChapterDatasInput {

    @Field(() => UserTutorialsWhereUniqueInput, {nullable:false})
    where!: UserTutorialsWhereUniqueInput;

    @Field(() => UserTutorialsCreateWithoutTutorialChapterDatasInput, {nullable:false})
    create!: UserTutorialsCreateWithoutTutorialChapterDatasInput;
}
