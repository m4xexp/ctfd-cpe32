import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TutorialChapterDatasWhereInput } from './tutorial-chapter-datas-where.input';

@InputType()
export class TutorialChapterDatasRelationFilter {

    @Field(() => TutorialChapterDatasWhereInput, {nullable:true})
    is?: TutorialChapterDatasWhereInput;

    @Field(() => TutorialChapterDatasWhereInput, {nullable:true})
    isNot?: TutorialChapterDatasWhereInput;
}
