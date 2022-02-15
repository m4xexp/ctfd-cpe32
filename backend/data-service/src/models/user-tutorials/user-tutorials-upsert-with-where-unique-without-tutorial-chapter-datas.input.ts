import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input';
import { UserTutorialsUpdateWithoutTutorialChapterDatasInput } from './user-tutorials-update-without-tutorial-chapter-datas.input';
import { UserTutorialsCreateWithoutTutorialChapterDatasInput } from './user-tutorials-create-without-tutorial-chapter-datas.input';

@InputType()
export class UserTutorialsUpsertWithWhereUniqueWithoutTutorialChapterDatasInput {

    @Field(() => UserTutorialsWhereUniqueInput, {nullable:false})
    where!: UserTutorialsWhereUniqueInput;

    @Field(() => UserTutorialsUpdateWithoutTutorialChapterDatasInput, {nullable:false})
    update!: UserTutorialsUpdateWithoutTutorialChapterDatasInput;

    @Field(() => UserTutorialsCreateWithoutTutorialChapterDatasInput, {nullable:false})
    create!: UserTutorialsCreateWithoutTutorialChapterDatasInput;
}
