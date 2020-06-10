import { ProcessEnvironment } from "@mscs/environment";
import { Controller, Get, InternalServerErrorException, Render } from "@nestjs/common";

@Controller()
export class HomeController {

    @Get("/")
    @Render("application/home/index.html.twig")
    public index() {
        const environment = new ProcessEnvironment();

        if (!environment.has("API_HOST")) {
            throw new InternalServerErrorException("Missing environment variable \"API_HOST\".");
        }

        return { host: environment.get("API_HOST") };
    }

}
