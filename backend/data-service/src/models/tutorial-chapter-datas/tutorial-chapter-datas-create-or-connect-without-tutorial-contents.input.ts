import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TutorialChapterDatasWhereUniqueInput } from './tutorial-chapter-datas-where-unique.input';
import { TutorialChapterDatasCreateWithoutTutorialContentsInput } from './tutorial-chapter-datas-create-without-tutorial-contents.input';

@InputType()
export class TutorialChapterDatasCreateOrConnectWithoutTutorialContentsInput {

    @Field(() => TutorialChapterDatasWhereUniqueInput, {nullable:false})
    where!: TutorialChapterDatasWhereUniqueInput;

    @Field(() => TutorialChapterDatasCreateWithoutTutorialContentsInput, {nullable:false})
    create!: TutorialChapterDatasCreateWithoutTutorialContentsInput;
}
