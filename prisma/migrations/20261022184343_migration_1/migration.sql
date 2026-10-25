-- CreateEnum
CREATE TYPE "StatusHorario" AS ENUM ('DISPONIVEL', 'RESERVADO', 'CANCELADO');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profissional" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "profissao" TEXT NOT NULL,
    "aprovado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Profissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Horarios" (
    "id" TEXT NOT NULL,
    "servico" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "status" "StatusHorario" NOT NULL DEFAULT 'DISPONIVEL',
    "local" TEXT NOT NULL,
    "lembreteEnviado" BOOLEAN NOT NULL DEFAULT false,
    "profissionalId" TEXT NOT NULL,
    "usuarioId" TEXT,

    CONSTRAINT "Horarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profissional_email_key" ON "Profissional"("email");

-- AddForeignKey
ALTER TABLE "Horarios" ADD CONSTRAINT "Horarios_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horarios" ADD CONSTRAINT "Horarios_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
