-- DropForeignKey
ALTER TABLE "tb_processamento_cep" DROP CONSTRAINT "tb_processamento_cep_cepId_fkey";

-- CreateIndex
CREATE INDEX "tb_cep_indprocessameto_idx" ON "tb_cep"("indprocessameto");

-- AddForeignKey
ALTER TABLE "tb_processamento_cep" ADD CONSTRAINT "tb_processamento_cep_cepId_fkey" FOREIGN KEY ("cepId") REFERENCES "tb_cep"("id") ON DELETE CASCADE ON UPDATE CASCADE;
