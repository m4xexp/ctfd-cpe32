import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgesCreateWithoutEventsInput } from './badges-create-without-events.input';
import { BadgesCreateOrConnectWithoutEventsInput } from './badges-create-or-connect-without-events.input';
import { BadgesUpsertWithoutEventsInput } from './badges-upsert-without-events.input';
import { BadgesWhereUniqueInput } from './badges-where-unique.input';
import { BadgesUpdateWithoutEventsInput } from './badges-update-without-events.input';

@InputType()
export class BadgesUpdateOneRequiredWithoutEventsInput {

    @Field(() => BadgesCreateWithoutEventsInput, {nullable:true})
    create?: BadgesCreateWithoutEventsInput;

    @Field(() => BadgesCreateOrConnectWithoutEventsInput, {nullable:true})
    connectOrCreate?: BadgesCreateOrConnectWithoutEventsInput;

    @Field(() => BadgesUpsertWithoutEventsInput, {nullable:true})
    upsert?: BadgesUpsertWithoutEventsInput;

    @Field(() => BadgesWhereUniqueInput, {nullable:true})
    connect?: BadgesWhereUniqueInput;

    @Field(() => BadgesUpdateWithoutEventsInput, {nullable:true})
    update?: BadgesUpdateWithoutEventsInput;
}
