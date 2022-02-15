import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TutorialChapterDatasWhereInput } from './tutorial-chapter-datas-where.input';

@InputType()
export class TutorialChapterDatasListRelationFilter {

    @Field(() => TutorialChapterDatasWhereInput, {nullable:true})
    every?: TutorialChapterDatasWhereInput;

    @Field(() => TutorialChapterDatasWhereInput, {nullable:true})
    some?: TutorialChapterDatasWhereInput;

    @Field(() => TutorialChapterDatasWhereInput, {nullable:true})
    none?: TutorialChapterDatasWhereInput;
}
