import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgesWhereUniqueInput } from './badges-where-unique.input';
import { BadgesCreateWithoutEventsInput } from './badges-create-without-events.input';

@InputType()
export class BadgesCreateOrConnectWithoutEventsInput {

    @Field(() => BadgesWhereUniqueInput, {nullable:false})
    where!: BadgesWhereUniqueInput;

    @Field(() => BadgesCreateWithoutEventsInput, {nullable:false})
    create!: BadgesCreateWithoutEventsInput;
}
