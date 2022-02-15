import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserLoggingsUncheckedUpdateManyWithoutUsersInput } from '../user-loggings/user-loggings-unchecked-update-many-without-users.input';
import { UserBadgesUncheckedUpdateManyWithoutUsersInput } from '../user-badges/user-badges-unchecked-update-many-without-users.input';
import { TeamMembersUncheckedUpdateManyWithoutUsersInput } from '../team-members/team-members-unchecked-update-many-without-users.input';
import { UserTutorialsUncheckedUpdateManyWithoutUsersInput } from '../user-tutorials/user-tutorials-unchecked-update-many-without-users.input';
import { UserScoresUncheckedUpdateManyWithoutUsersInput } from '../user-scores/user-scores-unchecked-update-many-without-users.input';

@InputType()
export class UsersUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    user_id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    user_invite_id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profile_pic?: NullableStringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    total_score?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    conuntry_code?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    banned?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    verified?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    quick_start_status?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    profile_description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    github_link?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    twitter_link?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    facebook_link?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserLoggingsUncheckedUpdateManyWithoutUsersInput, {nullable:true})
    userLoggings?: UserLoggingsUncheckedUpdateManyWithoutUsersInput;

    @Field(() => UserBadgesUncheckedUpdateManyWithoutUsersInput, {nullable:true})
    userBadges?: UserBadgesUncheckedUpdateManyWithoutUsersInput;

    @Field(() => TeamMembersUncheckedUpdateManyWithoutUsersInput, {nullable:true})
    teamMembers?: TeamMembersUncheckedUpdateManyWithoutUsersInput;

    @Field(() => UserTutorialsUncheckedUpdateManyWithoutUsersInput, {nullable:true})
    userTutorials?: UserTutorialsUncheckedUpdateManyWithoutUsersInput;

    @Field(() => UserScoresUncheckedUpdateManyWithoutUsersInput, {nullable:true})
    userScores?: UserScoresUncheckedUpdateManyWithoutUsersInput;
}
