import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgesCreateManyInput } from './badges-create-many.input';

@ArgsType()
export class CreateManyBadgesArgs {

    @Field(() => [BadgesCreateManyInput], {nullable:false})
    data!: Array<BadgesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
