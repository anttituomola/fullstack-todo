/*
  Warnings:

  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "todos" ADD COLUMN     "userId" TEXT NOT NULL DEFAULT E'null';

-- DropTable
DROP TABLE "test";
