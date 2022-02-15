import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TutorialChapterDatasUpdateManyMutationInput } from './tutorial-chapter-datas-update-many-mutation.input';
import { TutorialChapterDatasWhereInput } from './tutorial-chapter-datas-where.input';

@ArgsType()
export class UpdateManyTutorialChapterDatasArgs {

    @Field(() => TutorialChapterDatasUpdateManyMutationInput, {nullable:false})
    data!: TutorialChapterDatasUpdateManyMutationInput;

    @Field(() => TutorialChapterDatasWhereInput, {nullable:true})
    where?: TutorialChapterDatasWhereInput;
}
