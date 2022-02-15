import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TutorialChapterDatasWhereUniqueInput } from './tutorial-chapter-datas-where-unique.input';
import { TutorialChapterDatasUpdateWithoutTutorialContentsInput } from './tutorial-chapter-datas-update-without-tutorial-contents.input';

@InputType()
export class TutorialChapterDatasUpdateWithWhereUniqueWithoutTutorialContentsInput {

    @Field(() => TutorialChapterDatasWhereUniqueInput, {nullable:false})
    where!: TutorialChapterDatasWhereUniqueInput;

    @Field(() => TutorialChapterDatasUpdateWithoutTutorialContentsInput, {nullable:false})
    data!: TutorialChapterDatasUpdateWithoutTutorialContentsInput;
}
