import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TutorialChapterDatasWhereUniqueInput } from './tutorial-chapter-datas-where-unique.input';
import { TutorialChapterDatasCreateInput } from './tutorial-chapter-datas-create.input';
import { TutorialChapterDatasUpdateInput } from './tutorial-chapter-datas-update.input';

@ArgsType()
export class UpsertOneTutorialChapterDatasArgs {

    @Field(() => TutorialChapterDatasWhereUniqueInput, {nullable:false})
    where!: TutorialChapterDatasWhereUniqueInput;

    @Field(() => TutorialChapterDatasCreateInput, {nullable:false})
    create!: TutorialChapterDatasCreateInput;

    @Field(() => TutorialChapterDatasUpdateInput, {nullable:false})
    update!: TutorialChapterDatasUpdateInput;
}
