import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersRelationFilter } from '../users/users-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { TutorialChapterDatasRelationFilter } from '../tutorial-chapter-datas/tutorial-chapter-datas-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserTutorialsWhereInput {

    @Field(() => [UserTutorialsWhereInput], {nullable:true})
    AND?: Array<UserTutorialsWhereInput>;

    @Field(() => [UserTutorialsWhereInput], {nullable:true})
    OR?: Array<UserTutorialsWhereInput>;

    @Field(() => [UserTutorialsWhereInput], {nullable:true})
    NOT?: Array<UserTutorialsWhereInput>;

    @Field(() => UsersRelationFilter, {nullable:true})
    users?: UsersRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => TutorialChapterDatasRelationFilter, {nullable:true})
    tutorialChapterDatas?: TutorialChapterDatasRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    chapter_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
