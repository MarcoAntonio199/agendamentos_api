/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `local` to the `Horarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sobrenome` to the `Profissional` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusHorario" AS ENUM ('DISPONIVEL', 'RESERVADO', 'CANCELADO');

-- AlterTable
ALTER TABLE "Horarios" ADD COLUMN     "lembreteEnviado" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "local" TEXT NOT NULL,
ADD COLUMN     "status" "StatusHorario" NOT NULL DEFAULT 'DISPONIVEL',
ADD COLUMN     "usuarioId" TEXT;

-- AlterTable
ALTER TABLE "Profissional" ADD COLUMN     "aprovado" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sobrenome" TEXT NOT NULL;

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_sobrenome_key" ON "Usuario"("sobrenome");

-- AddForeignKey
ALTER TABLE "Horarios" ADD CONSTRAINT "Horarios_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
