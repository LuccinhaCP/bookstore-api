-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'ADMIN', 'MASTER');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'ADMIN';
