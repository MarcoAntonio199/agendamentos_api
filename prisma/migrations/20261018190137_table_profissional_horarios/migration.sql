/*
  Warnings:

  - You are about to drop the column `emal` on the `Profissional` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Profissional` table. All the data in the column will be lost.
  - Added the required column `email` to the `Profissional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Profissional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profissao` to the `Profissional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profissional" DROP COLUMN "emal",
DROP COLUMN "name",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "profissao" TEXT NOT NULL;
