import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Users } from '../users/users.model';
import { TutorialChapterDatas } from '../tutorial-chapter-datas/tutorial-chapter-datas.model';

@ObjectType()
export class UserTutorials {

    @Field(() => Users, {nullable:false})
    users?: Users;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => TutorialChapterDatas, {nullable:false})
    tutorialChapterDatas?: TutorialChapterDatas;

    @Field(() => String, {nullable:false})
    chapter_id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
