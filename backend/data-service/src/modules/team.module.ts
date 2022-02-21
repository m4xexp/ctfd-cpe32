import { Module } from '@nestjs/common'
import { TeamsService } from 'src/services/teams.service'
import { TeamsResolver } from 'src/resolvers/teams.resolvers'
import { PrismaModule } from 'src/providers/databases/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [TeamsService, TeamsResolver],
})
export class TeamModule {}
