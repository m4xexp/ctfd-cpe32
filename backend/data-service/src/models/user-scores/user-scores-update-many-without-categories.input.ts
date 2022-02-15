import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresCreateWithoutCategoriesInput } from './user-scores-create-without-categories.input';
import { UserScoresCreateOrConnectWithoutCategoriesInput } from './user-scores-create-or-connect-without-categories.input';
import { UserScoresUpsertWithWhereUniqueWithoutCategoriesInput } from './user-scores-upsert-with-where-unique-without-categories.input';
import { UserScoresCreateManyCategoriesInputEnvelope } from './user-scores-create-many-categories-input-envelope.input';
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input';
import { UserScoresUpdateWithWhereUniqueWithoutCategoriesInput } from './user-scores-update-with-where-unique-without-categories.input';
import { UserScoresUpdateManyWithWhereWithoutCategoriesInput } from './user-scores-update-many-with-where-without-categories.input';
import { UserScoresScalarWhereInput } from './user-scores-scalar-where.input';

@InputType()
export class UserScoresUpdateManyWithoutCategoriesInput {

    @Field(() => [UserScoresCreateWithoutCategoriesInput], {nullable:true})
    create?: Array<UserScoresCreateWithoutCategoriesInput>;

    @Field(() => [UserScoresCreateOrConnectWithoutCategoriesInput], {nullable:true})
    connectOrCreate?: Array<UserScoresCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [UserScoresUpsertWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    upsert?: Array<UserScoresUpsertWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => UserScoresCreateManyCategoriesInputEnvelope, {nullable:true})
    createMany?: UserScoresCreateManyCategoriesInputEnvelope;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    set?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    delete?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    connect?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresUpdateWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    update?: Array<UserScoresUpdateWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [UserScoresUpdateManyWithWhereWithoutCategoriesInput], {nullable:true})
    updateMany?: Array<UserScoresUpdateManyWithWhereWithoutCategoriesInput>;

    @Field(() => [UserScoresScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScoresScalarWhereInput>;
}
