import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TutorialContentsCreateManyInput } from './tutorial-contents-create-many.input';

@ArgsType()
export class CreateManyTutorialContentsArgs {

    @Field(() => [TutorialContentsCreateManyInput], {nullable:false})
    data!: Array<TutorialContentsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
