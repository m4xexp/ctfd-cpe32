import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserTutorialsCreateManyTutorialChapterDatasInput } from './user-tutorials-create-many-tutorial-chapter-datas.input';

@InputType()
export class UserTutorialsCreateManyTutorialChapterDatasInputEnvelope {

    @Field(() => [UserTutorialsCreateManyTutorialChapterDatasInput], {nullable:false})
    data!: Array<UserTutorialsCreateManyTutorialChapterDatasInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
