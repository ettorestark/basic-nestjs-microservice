"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqps://mfebeokf:Hfp-8-ZzLLrwQdVXP3GooS2VL4b9hSAa@snake.rmq2.cloudamqp.com/mfebeokf'],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            },
        },
    });
    await app.listen();
    console.log('Microservice is listening');
}
bootstrap();
//# sourceMappingURL=main.js.map