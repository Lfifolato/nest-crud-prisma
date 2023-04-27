/*
  Warnings:

  - You are about to drop the `cep` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `logProcessamento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "logProcessamento" DROP CONSTRAINT "logProcessamento_cepId_fkey";

-- DropTable
DROP TABLE "cep";

-- DropTable
DROP TABLE "logProcessamento";

-- CreateTable
CREATE TABLE "tb_cep" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "indprocessameto" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_cep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_processamento_cep" (
    "id" SERIAL NOT NULL,
    "cepId" INTEGER NOT NULL,
    "codeStatus" TEXT NOT NULL,
    "log" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_processamento_cep_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_cep_cep_key" ON "tb_cep"("cep");

-- CreateIndex
CREATE UNIQUE INDEX "tb_processamento_cep_cepId_key" ON "tb_processamento_cep"("cepId");

-- CreateIndex
CREATE INDEX "tb_processamento_cep_cepId_idx" ON "tb_processamento_cep"("cepId");

-- AddForeignKey
ALTER TABLE "tb_processamento_cep" ADD CONSTRAINT "tb_processamento_cep_cepId_fkey" FOREIGN KEY ("cepId") REFERENCES "tb_cep"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
