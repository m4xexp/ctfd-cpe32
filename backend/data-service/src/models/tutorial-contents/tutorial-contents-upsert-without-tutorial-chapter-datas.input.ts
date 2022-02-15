import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TutorialContentsUpdateWithoutTutorialChapterDatasInput } from './tutorial-contents-update-without-tutorial-chapter-datas.input';
import { TutorialContentsCreateWithoutTutorialChapterDatasInput } from './tutorial-contents-create-without-tutorial-chapter-datas.input';

@InputType()
export class TutorialContentsUpsertWithoutTutorialChapterDatasInput {

    @Field(() => TutorialContentsUpdateWithoutTutorialChapterDatasInput, {nullable:false})
    update!: TutorialContentsUpdateWithoutTutorialChapterDatasInput;

    @Field(() => TutorialContentsCreateWithoutTutorialChapterDatasInput, {nullable:false})
    create!: TutorialContentsCreateWithoutTutorialChapterDatasInput;
}
