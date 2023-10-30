import { ConfigService } from '@nestjs/config/dist';
import { ChatgptService } from 'src/chatgpt/chatgpt.service';
import { Start, Update, Ctx, On, Message } from 'nestjs-telegraf';
import { Scenes, Telegraf } from 'telegraf';

type Context = Scenes.SceneContext;

@Update()
export class TelegramService extends Telegraf<Context> {
    constructor(
        private readonly configService: ConfigService,
        private readonly gpt: ChatgptService,
    ) {
        super(configService.get('TELEGRAM_API'));
    }
    @Start()
    onStart(@Ctx() ctx: Context) {
        ctx.replyWithHTML(`<b>Hi, ${ctx.from.username}</b>
        
        `);
    }
    @On('text')
    onMessage(@Message('text') message: string) {
        return this.gpt.generateResponse(message);
    }
}
