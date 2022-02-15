import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresCreateManyUsersInput } from './user-scores-create-many-users.input';

@InputType()
export class UserScoresCreateManyUsersInputEnvelope {

    @Field(() => [UserScoresCreateManyUsersInput], {nullable:false})
    data!: Array<UserScoresCreateManyUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
