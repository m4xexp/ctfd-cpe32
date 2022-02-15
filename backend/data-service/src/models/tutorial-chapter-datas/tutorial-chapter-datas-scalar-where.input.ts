import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TutorialChapterDatasScalarWhereInput {

    @Field(() => [TutorialChapterDatasScalarWhereInput], {nullable:true})
    AND?: Array<TutorialChapterDatasScalarWhereInput>;

    @Field(() => [TutorialChapterDatasScalarWhereInput], {nullable:true})
    OR?: Array<TutorialChapterDatasScalarWhereInput>;

    @Field(() => [TutorialChapterDatasScalarWhereInput], {nullable:true})
    NOT?: Array<TutorialChapterDatasScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    chapter_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tutorial_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    chapter_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    video_link?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    flag_link?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    question?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    answer?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
