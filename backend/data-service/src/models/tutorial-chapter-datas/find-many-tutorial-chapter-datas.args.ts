import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TutorialChapterDatasWhereInput } from './tutorial-chapter-datas-where.input';
import { TutorialChapterDatasOrderByWithRelationInput } from './tutorial-chapter-datas-order-by-with-relation.input';
import { TutorialChapterDatasWhereUniqueInput } from './tutorial-chapter-datas-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TutorialChapterDatasScalarFieldEnum } from './tutorial-chapter-datas-scalar-field.enum';

@ArgsType()
export class FindManyTutorialChapterDatasArgs {

    @Field(() => TutorialChapterDatasWhereInput, {nullable:true})
    where?: TutorialChapterDatasWhereInput;

    @Field(() => [TutorialChapterDatasOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TutorialChapterDatasOrderByWithRelationInput>;

    @Field(() => TutorialChapterDatasWhereUniqueInput, {nullable:true})
    cursor?: TutorialChapterDatasWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TutorialChapterDatasScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TutorialChapterDatasScalarFieldEnum>;
}
