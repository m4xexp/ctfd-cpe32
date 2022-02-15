import { registerEnumType } from '@nestjs/graphql';

export enum TutorialChapterDatasScalarFieldEnum {
    chapter_id = "chapter_id",
    tutorial_id = "tutorial_id",
    chapter_name = "chapter_name",
    video_link = "video_link",
    flag_link = "flag_link",
    description = "description",
    question = "question",
    answer = "answer",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TutorialChapterDatasScalarFieldEnum, { name: 'TutorialChapterDatasScalarFieldEnum', description: undefined })
