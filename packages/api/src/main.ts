import { EnvironmentLoader, ProcessEnvironment } from "@mscs/environment";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as helmet from "helmet";
import { joinToPackageDirectory } from "./Meta";
import { ApplicationModule } from "./Modules/Application/ApplicationModule";

const DEFAULT_PORT = 3000;

async function bootstrap() {
    const environment = new ProcessEnvironment();
    const environmentLoader = new EnvironmentLoader(environment);
    const application = await NestFactory.create<NestExpressApplication>(ApplicationModule);

    application.use(helmet());
    application.enableCors({

    });

    await environmentLoader.loadEnvironment(joinToPackageDirectory(".env"));

    const PORT = environment.has("PORT") ? environment.get("PORT") : DEFAULT_PORT;
    environment.set("PORT", PORT.toString());

    await application.listen(PORT);
}

bootstrap()
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
