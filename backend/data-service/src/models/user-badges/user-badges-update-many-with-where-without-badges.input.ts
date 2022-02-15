import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBadgesScalarWhereInput } from './user-badges-scalar-where.input';
import { UserBadgesUpdateManyMutationInput } from './user-badges-update-many-mutation.input';

@InputType()
export class UserBadgesUpdateManyWithWhereWithoutBadgesInput {

    @Field(() => UserBadgesScalarWhereInput, {nullable:false})
    where!: UserBadgesScalarWhereInput;

    @Field(() => UserBadgesUpdateManyMutationInput, {nullable:false})
    data!: UserBadgesUpdateManyMutationInput;
}
