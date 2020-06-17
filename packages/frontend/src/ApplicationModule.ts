import { Module } from "@nestjs/common";
import { HealthController } from "./Controllers/HealthController";
import { HomeController } from "./Controllers/HomeController";

@Module({
    controllers: [
        HealthController,
        HomeController,
    ],
})
export class ApplicationModule {

}
