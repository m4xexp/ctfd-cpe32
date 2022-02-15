import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersUpdateWithoutUserScoresInput } from './users-update-without-user-scores.input';
import { UsersCreateWithoutUserScoresInput } from './users-create-without-user-scores.input';

@InputType()
export class UsersUpsertWithoutUserScoresInput {

    @Field(() => UsersUpdateWithoutUserScoresInput, {nullable:false})
    update!: UsersUpdateWithoutUserScoresInput;

    @Field(() => UsersCreateWithoutUserScoresInput, {nullable:false})
    create!: UsersCreateWithoutUserScoresInput;
}
