import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { joinToPackageDirectory } from "../../Meta";
import { CatController } from "./Controllers/CatController";
import { HealthController } from "./Controllers/HealthController";
import { Cat } from "./Entities/Cat";
import { CatService } from "./Service/CatService";

@Module({
    controllers: [
        HealthController,
        CatController,
    ],
    providers: [
        CatService,
    ],
    imports: [
        TypeOrmModule.forRoot(require(joinToPackageDirectory("ormconfig.js"))),
        TypeOrmModule.forFeature([Cat]),
    ],
})
export class ApplicationModule {

}
