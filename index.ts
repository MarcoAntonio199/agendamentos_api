import { get } from "node:http";
import { prisma } from "./lib/prisma.js";

async function getUser(){
    const users = await prisma.user.findMany()
    console.log(users[0]?.email)
}

getUser()