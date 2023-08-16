"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const GLOBAL_PREFIX = 'api';
    const PORT = 5000;
    app.enableCors({
        origin: '*',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.setGlobalPrefix(GLOBAL_PREFIX);
    await app.listen(PORT, () => {
        common_1.Logger.log(`Server running on port http://localhost:${PORT}/${GLOBAL_PREFIX}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map