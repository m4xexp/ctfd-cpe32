import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserTutorialsUser_idChapter_idCompoundUniqueInput } from './user-tutorials-user-id-chapter-id-compound-unique.input';

@InputType()
export class UserTutorialsWhereUniqueInput {

    @Field(() => UserTutorialsUser_idChapter_idCompoundUniqueInput, {nullable:true})
    user_id_chapter_id?: UserTutorialsUser_idChapter_idCompoundUniqueInput;
}
