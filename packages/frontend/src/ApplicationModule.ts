import { Module } from "@nestjs/common";
import { HomeController } from "./Controllers/HomeController";
import { HealthController } from "./Controllers/HealthController";

@Module({
    controllers: [
        HealthController,
        HomeController,
    ],
})
export class ApplicationModule {

}
