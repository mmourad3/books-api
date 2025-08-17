import { prisma } from "../utils/database.js";
export const BookModel={
    findAll:()=> prisma.book.findMany(),
    findById:(id)=> prisma.book.findUnique({where:{id}}),
    create:(data)=> prisma.book.create({data}),
    update:(id,data)=> prisma.book.update({where:{id},data}),
    delete:(id)=> prisma.book.delete({where:{id}})
};