import { Module } from "@nestjs/common";
import { HomeController } from "./Controllers/HomeController";

@Module({
    controllers: [
        HomeController,
    ],
})
export class ApplicationModule {

}
