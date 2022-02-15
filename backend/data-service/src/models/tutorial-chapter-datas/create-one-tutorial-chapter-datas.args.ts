import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TutorialChapterDatasCreateInput } from './tutorial-chapter-datas-create.input';

@ArgsType()
export class CreateOneTutorialChapterDatasArgs {

    @Field(() => TutorialChapterDatasCreateInput, {nullable:false})
    data!: TutorialChapterDatasCreateInput;
}
