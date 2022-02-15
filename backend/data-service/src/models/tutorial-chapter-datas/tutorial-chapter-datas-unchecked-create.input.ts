import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserTutorialsUncheckedCreateNestedManyWithoutTutorialChapterDatasInput } from '../user-tutorials/user-tutorials-unchecked-create-nested-many-without-tutorial-chapter-datas.input';

@InputType()
export class TutorialChapterDatasUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    chapter_id?: string;

    @Field(() => String, {nullable:false})
    tutorial_id!: string;

    @Field(() => String, {nullable:true})
    chapter_name?: string;

    @Field(() => String, {nullable:true})
    video_link?: string;

    @Field(() => String, {nullable:true})
    flag_link?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    question?: string;

    @Field(() => String, {nullable:true})
    answer?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserTutorialsUncheckedCreateNestedManyWithoutTutorialChapterDatasInput, {nullable:true})
    userTutorials?: UserTutorialsUncheckedCreateNestedManyWithoutTutorialChapterDatasInput;
}
