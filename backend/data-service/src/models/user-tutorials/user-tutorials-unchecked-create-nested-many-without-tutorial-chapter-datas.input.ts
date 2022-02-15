import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserTutorialsCreateWithoutTutorialChapterDatasInput } from './user-tutorials-create-without-tutorial-chapter-datas.input';
import { UserTutorialsCreateOrConnectWithoutTutorialChapterDatasInput } from './user-tutorials-create-or-connect-without-tutorial-chapter-datas.input';
import { UserTutorialsCreateManyTutorialChapterDatasInputEnvelope } from './user-tutorials-create-many-tutorial-chapter-datas-input-envelope.input';
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input';

@InputType()
export class UserTutorialsUncheckedCreateNestedManyWithoutTutorialChapterDatasInput {

    @Field(() => [UserTutorialsCreateWithoutTutorialChapterDatasInput], {nullable:true})
    create?: Array<UserTutorialsCreateWithoutTutorialChapterDatasInput>;

    @Field(() => [UserTutorialsCreateOrConnectWithoutTutorialChapterDatasInput], {nullable:true})
    connectOrCreate?: Array<UserTutorialsCreateOrConnectWithoutTutorialChapterDatasInput>;

    @Field(() => UserTutorialsCreateManyTutorialChapterDatasInputEnvelope, {nullable:true})
    createMany?: UserTutorialsCreateManyTutorialChapterDatasInputEnvelope;

    @Field(() => [UserTutorialsWhereUniqueInput], {nullable:true})
    connect?: Array<UserTutorialsWhereUniqueInput>;
}
