import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserTutorialsCreateWithoutTutorialChapterDatasInput } from './user-tutorials-create-without-tutorial-chapter-datas.input';
import { UserTutorialsCreateOrConnectWithoutTutorialChapterDatasInput } from './user-tutorials-create-or-connect-without-tutorial-chapter-datas.input';
import { UserTutorialsUpsertWithWhereUniqueWithoutTutorialChapterDatasInput } from './user-tutorials-upsert-with-where-unique-without-tutorial-chapter-datas.input';
import { UserTutorialsCreateManyTutorialChapterDatasInputEnvelope } from './user-tutorials-create-many-tutorial-chapter-datas-input-envelope.input';
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input';
import { UserTutorialsUpdateWithWhereUniqueWithoutTutorialChapterDatasInput } from './user-tutorials-update-with-where-unique-without-tutorial-chapter-datas.input';
import { UserTutorialsUpdateManyWithWhereWithoutTutorialChapterDatasInput } from './user-tutorials-update-many-with-where-without-tutorial-chapter-datas.input';
import { UserTutorialsScalarWhereInput } from './user-tutorials-scalar-where.input';

@InputType()
export class UserTutorialsUncheckedUpdateManyWithoutTutorialChapterDatasInput {

    @Field(() => [UserTutorialsCreateWithoutTutorialChapterDatasInput], {nullable:true})
    create?: Array<UserTutorialsCreateWithoutTutorialChapterDatasInput>;

    @Field(() => [UserTutorialsCreateOrConnectWithoutTutorialChapterDatasInput], {nullable:true})
    connectOrCreate?: Array<UserTutorialsCreateOrConnectWithoutTutorialChapterDatasInput>;

    @Field(() => [UserTutorialsUpsertWithWhereUniqueWithoutTutorialChapterDatasInput], {nullable:true})
    upsert?: Array<UserTutorialsUpsertWithWhereUniqueWithoutTutorialChapterDatasInput>;

    @Field(() => UserTutorialsCreateManyTutorialChapterDatasInputEnvelope, {nullable:true})
    createMany?: UserTutorialsCreateManyTutorialChapterDatasInputEnvelope;

    @Field(() => [UserTutorialsWhereUniqueInput], {nullable:true})
    set?: Array<UserTutorialsWhereUniqueInput>;

    @Field(() => [UserTutorialsWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserTutorialsWhereUniqueInput>;

    @Field(() => [UserTutorialsWhereUniqueInput], {nullable:true})
    delete?: Array<UserTutorialsWhereUniqueInput>;

    @Field(() => [UserTutorialsWhereUniqueInput], {nullable:true})
    connect?: Array<UserTutorialsWhereUniqueInput>;

    @Field(() => [UserTutorialsUpdateWithWhereUniqueWithoutTutorialChapterDatasInput], {nullable:true})
    update?: Array<UserTutorialsUpdateWithWhereUniqueWithoutTutorialChapterDatasInput>;

    @Field(() => [UserTutorialsUpdateManyWithWhereWithoutTutorialChapterDatasInput], {nullable:true})
    updateMany?: Array<UserTutorialsUpdateManyWithWhereWithoutTutorialChapterDatasInput>;

    @Field(() => [UserTutorialsScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserTutorialsScalarWhereInput>;
}
