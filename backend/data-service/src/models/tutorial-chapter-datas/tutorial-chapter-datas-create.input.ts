import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TutorialContentsCreateNestedOneWithoutTutorialChapterDatasInput } from '../tutorial-contents/tutorial-contents-create-nested-one-without-tutorial-chapter-datas.input';
import { UserTutorialsCreateNestedManyWithoutTutorialChapterDatasInput } from '../user-tutorials/user-tutorials-create-nested-many-without-tutorial-chapter-datas.input';

@InputType()
export class TutorialChapterDatasCreateInput {

    @Field(() => String, {nullable:true})
    chapter_id?: string;

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

    @Field(() => TutorialContentsCreateNestedOneWithoutTutorialChapterDatasInput, {nullable:false})
    tutorialContents!: TutorialContentsCreateNestedOneWithoutTutorialChapterDatasInput;

    @Field(() => UserTutorialsCreateNestedManyWithoutTutorialChapterDatasInput, {nullable:true})
    userTutorials?: UserTutorialsCreateNestedManyWithoutTutorialChapterDatasInput;
}
