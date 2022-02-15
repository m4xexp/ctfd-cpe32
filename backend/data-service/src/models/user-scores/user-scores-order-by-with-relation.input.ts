import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChallengesOrderByWithRelationInput } from '../challenges/challenges-order-by-with-relation.input';
import { LevelsOrderByWithRelationInput } from '../levels/levels-order-by-with-relation.input';
import { TypesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';
import { CategoriesOrderByWithRelationInput } from '../categories/categories-order-by-with-relation.input';

@InputType()
export class UserScoresOrderByWithRelationInput {

    @Field(() => UsersOrderByWithRelationInput, {nullable:true})
    users?: UsersOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => ChallengesOrderByWithRelationInput, {nullable:true})
    challenges?: ChallengesOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    challenge_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    base_score?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    time_score?: keyof typeof SortOrder;

    @Field(() => LevelsOrderByWithRelationInput, {nullable:true})
    levels?: LevelsOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    level_id?: keyof typeof SortOrder;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    types?: TypesOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    types_id?: keyof typeof SortOrder;

    @Field(() => CategoriesOrderByWithRelationInput, {nullable:true})
    categories?: CategoriesOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    categories_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
