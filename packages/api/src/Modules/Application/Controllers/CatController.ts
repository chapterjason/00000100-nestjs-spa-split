import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UsePipes } from "@nestjs/common";
import { CreateCatData } from "../Datas/Cat/CreateCatData";
import { EditCatData } from "../Datas/Cat/EditCatData";
import { Cat } from "../Entities/Cat";
import { CatService } from "../Service/CatService";

@Controller("/api/cats")
export class CatController {

    protected service: CatService;

    public constructor(service: CatService) {
        this.service = service;
    }

    @Get()
    public async index() {
        return this.service.getRepository().find();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    public async create(@Body() catData: CreateCatData) {
        const cat: Cat = await this.service.create(catData);

        return cat;
    }

    @Get("/:id")
    @UsePipes()
    public async view(@Param("id", ParseIntPipe) id: number) {
        const cat: Cat = await this.service.getRepository().findOne(id);

        return cat;
    }

    @Patch("/:id")
    public async edit(@Body() catData: EditCatData, @Param("id", ParseIntPipe) id: number) {
        const cat: Cat = await this.service.update(id, catData);

        return cat;
    }

    @Delete("/:id")
    public async delete(@Param("id", ParseIntPipe) id: number) {
        return this.service.delete(id);
    }

}
