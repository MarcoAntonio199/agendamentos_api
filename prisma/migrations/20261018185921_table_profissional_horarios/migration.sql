/*
  Warnings:

  - Added the required column `emal` to the `Profissional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Profissional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profissional" ADD COLUMN     "emal" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;
