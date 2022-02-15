import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TutorialChapterDatasWhereInput } from './tutorial-chapter-datas-where.input';
import { TutorialChapterDatasOrderByWithRelationInput } from './tutorial-chapter-datas-order-by-with-relation.input';
import { TutorialChapterDatasWhereUniqueInput } from './tutorial-chapter-datas-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TutorialChapterDatasCountAggregateInput } from './tutorial-chapter-datas-count-aggregate.input';
import { TutorialChapterDatasMinAggregateInput } from './tutorial-chapter-datas-min-aggregate.input';
import { TutorialChapterDatasMaxAggregateInput } from './tutorial-chapter-datas-max-aggregate.input';

@ArgsType()
export class TutorialChapterDatasAggregateArgs {

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

    @Field(() => TutorialChapterDatasCountAggregateInput, {nullable:true})
    _count?: TutorialChapterDatasCountAggregateInput;

    @Field(() => TutorialChapterDatasMinAggregateInput, {nullable:true})
    _min?: TutorialChapterDatasMinAggregateInput;

    @Field(() => TutorialChapterDatasMaxAggregateInput, {nullable:true})
    _max?: TutorialChapterDatasMaxAggregateInput;
}
