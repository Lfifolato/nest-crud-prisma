/*
  Warnings:

  - You are about to drop the `livros` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "livros";

-- CreateTable
CREATE TABLE "tb_libro" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "price" MONEY NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_libro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "tb_libro_name_idx" ON "tb_libro"("name");

-- CreateIndex
CREATE INDEX "tb_libro_status_idx" ON "tb_libro"("status");
