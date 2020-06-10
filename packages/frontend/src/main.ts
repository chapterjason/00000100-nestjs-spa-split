import { EnvironmentLoader, ProcessEnvironment } from "@mscs/environment";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ApplicationModule } from "./ApplicationModule";
import { joinToPackageDirectory } from "./Meta";
import { EntryFilesTwigExtension } from "./Twig/EntryFilesTwigExtension";

const DEFAULT_PORT = 3001;

async function bootstrap() {
    const environment = new ProcessEnvironment();
    const environmentLoader = new EnvironmentLoader(environment);
    const application = await NestFactory.create<NestExpressApplication>(ApplicationModule);

    await environmentLoader.loadEnvironment(joinToPackageDirectory(".env"));

    const PORT = environment.has("PORT") ? environment.get("PORT") : DEFAULT_PORT;
    environment.set("PORT", PORT.toString());

    application.useStaticAssets(joinToPackageDirectory("public"));
    application.setBaseViewsDir(joinToPackageDirectory("templates"));
    application.setViewEngine("twig");

    const twigExtension = new EntryFilesTwigExtension(joinToPackageDirectory("public/build"));
    twigExtension.register();

    await application.listen(PORT);
}

bootstrap()
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
