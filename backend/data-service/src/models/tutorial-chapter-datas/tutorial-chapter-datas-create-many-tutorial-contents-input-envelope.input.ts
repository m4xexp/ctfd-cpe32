import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TutorialChapterDatasCreateManyTutorialContentsInput } from './tutorial-chapter-datas-create-many-tutorial-contents.input';

@InputType()
export class TutorialChapterDatasCreateManyTutorialContentsInputEnvelope {

    @Field(() => [TutorialChapterDatasCreateManyTutorialContentsInput], {nullable:false})
    data!: Array<TutorialChapterDatasCreateManyTutorialContentsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
