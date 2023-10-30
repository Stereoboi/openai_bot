import { Module } from '@nestjs/common';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigModule } from '@nestjs/config/dist';
import { ChatgptModule } from './chatgpt/chatgpt.module';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), ChatgptModule, TelegramModule],
})
export class AppModule {}
