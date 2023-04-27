-- CreateTable
CREATE TABLE "cep" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "indprocessameto" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logProcessamento" (
    "id" SERIAL NOT NULL,
    "cepId" INTEGER NOT NULL,
    "codeStatus" TEXT NOT NULL,
    "log" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "logProcessamento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cep_cep_key" ON "cep"("cep");

-- CreateIndex
CREATE UNIQUE INDEX "logProcessamento_cepId_key" ON "logProcessamento"("cepId");

-- CreateIndex
CREATE INDEX "logProcessamento_cepId_idx" ON "logProcessamento"("cepId");

-- AddForeignKey
ALTER TABLE "logProcessamento" ADD CONSTRAINT "logProcessamento_cepId_fkey" FOREIGN KEY ("cepId") REFERENCES "cep"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
