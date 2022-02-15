import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TutorialChapterDatasUpdateInput } from './tutorial-chapter-datas-update.input';
import { TutorialChapterDatasWhereUniqueInput } from './tutorial-chapter-datas-where-unique.input';

@ArgsType()
export class UpdateOneTutorialChapterDatasArgs {

    @Field(() => TutorialChapterDatasUpdateInput, {nullable:false})
    data!: TutorialChapterDatasUpdateInput;

    @Field(() => TutorialChapterDatasWhereUniqueInput, {nullable:false})
    where!: TutorialChapterDatasWhereUniqueInput;
}
