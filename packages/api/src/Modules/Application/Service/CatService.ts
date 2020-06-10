import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToClass, plainToClassFromExist } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { Repository } from "typeorm";
import { CreateCatContract } from "../Contracts/Cat/CreateCatContract";
import { EditCatContract } from "../Contracts/Cat/EditCatContract";
import { Cat } from "../Entities/Cat";
import { ValidationException } from "../Exceptions/ValidationException";

export class CatService {

    protected repository: Repository<Cat>;

    public constructor(@InjectRepository(Cat) repository: Repository<Cat>) {
        this.repository = repository;
    }

    public getRepository() {
        return this.repository;
    }

    public async create(data: CreateCatContract) {
        const entity = plainToClass<Cat, CreateCatContract>(Cat, data);

        await this.validate(entity);

        return this.repository.save(entity);
    }

    public async update(idOrEntity: number | Cat, data: EditCatContract) {
        const entity = typeof idOrEntity === "number" ? await this.repository.findOne(idOrEntity) : idOrEntity;

        if (!entity) {
            throw new NotFoundException(`Entity "${idOrEntity}" not found.`);
        }

        plainToClassFromExist<Cat, EditCatContract>(entity, data);

        await this.validate(entity);

        return this.repository.save(entity);
    }

    public async delete(idOrEntity: number | Cat) {
        const entity = typeof idOrEntity === "number" ? await this.repository.findOne(idOrEntity) : idOrEntity;

        if (!entity) {
            throw new NotFoundException(`Cat "${idOrEntity}" not found.`);
        }

        const result = await this.repository.delete(entity);

        return 1 === result.affected;
    }

    protected async validate(entity: Cat) {
        const errors: ValidationError[] = await validate(entity);

        if (errors.length > 0) {
            throw new ValidationException(errors);
        }
    }

}
