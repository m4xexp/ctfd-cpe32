import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TutorialChapterDatasMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    chapter_id?: true;

    @Field(() => Boolean, {nullable:true})
    tutorial_id?: true;

    @Field(() => Boolean, {nullable:true})
    chapter_name?: true;

    @Field(() => Boolean, {nullable:true})
    video_link?: true;

    @Field(() => Boolean, {nullable:true})
    flag_link?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    question?: true;

    @Field(() => Boolean, {nullable:true})
    answer?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
