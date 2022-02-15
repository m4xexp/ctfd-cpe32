import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TutorialChapterDatasWhereInput } from './tutorial-chapter-datas-where.input';

@ArgsType()
export class DeleteManyTutorialChapterDatasArgs {

    @Field(() => TutorialChapterDatasWhereInput, {nullable:true})
    where?: TutorialChapterDatasWhereInput;
}
