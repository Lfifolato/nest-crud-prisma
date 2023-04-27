/*
  Warnings:

  - Added the required column `address` to the `tb_cep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `tb_cep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cod_ibge` to the `tb_cep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ddd` to the `tb_cep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `tb_cep` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_cep" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "cod_ibge" TEXT NOT NULL,
ADD COLUMN     "ddd" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;
