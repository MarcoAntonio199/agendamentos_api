/*
  Warnings:

  - You are about to drop the column `age` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "age",
DROP COLUMN "name",
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;
