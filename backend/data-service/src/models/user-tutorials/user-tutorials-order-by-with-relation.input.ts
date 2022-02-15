import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { TutorialChapterDatasOrderByWithRelationInput } from '../tutorial-chapter-datas/tutorial-chapter-datas-order-by-with-relation.input';

@InputType()
export class UserTutorialsOrderByWithRelationInput {

    @Field(() => UsersOrderByWithRelationInput, {nullable:true})
    users?: UsersOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => TutorialChapterDatasOrderByWithRelationInput, {nullable:true})
    tutorialChapterDatas?: TutorialChapterDatasOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    chapter_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
