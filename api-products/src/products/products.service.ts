import { Injectable } from "@nestjs/common";
import { ProductDto } from "./dtos/product.dto";
import { PrismaService } from "src/database/PrismaService";

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }
    async findAll() {
        return this.prisma.product.findMany()
    }
    async create(data: ProductDto) {

        const product = await this.prisma.product.create({
            data
        })
        return product
    }
    async update(id: string, data: ProductDto) {
        const product = await this.prisma.product.findUnique({
            where: {
                id
            }
        })
        if (!product) {
            throw new Error('The product does not exist')
        }
        return await this.prisma.product.update({
            data,
            where: {
                id,
            }
        })
    }
    async delete(id:string){
        const product = await this.prisma.product.findUnique({
            where: {
                id
            }
        })
      if (!product) {
        throw new Error('The product does not exist')
    }
    return await this.prisma.product.delete({
        where:{
            id
        }
    })
    }
}