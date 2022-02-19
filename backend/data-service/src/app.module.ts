import { Module } from '@nestjs/common'
import modules from 'src/modules'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    ...modules.modules,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...configService.get('graphql'),
      }),
    }),
  ],
  providers: [],
})
export class AppModule {}
