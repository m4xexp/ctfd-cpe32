import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { BadgesOrderByWithRelationInput } from '../badges/badges-order-by-with-relation.input';

@InputType()
export class UserBadgesOrderByWithRelationInput {

    @Field(() => UsersOrderByWithRelationInput, {nullable:true})
    users?: UsersOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => BadgesOrderByWithRelationInput, {nullable:true})
    badges?: BadgesOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    badge_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
