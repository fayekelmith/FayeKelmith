/*
  Warnings:

  - The `author` column on the `Essay` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[imgUrl]` on the table `Essay` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Essay" ADD COLUMN     "description" TEXT,
ADD COLUMN     "imgUrl" TEXT NOT NULL DEFAULT 'https://ibb.co/rFMB4ZJ',
DROP COLUMN "author",
ADD COLUMN     "author" TEXT[];

-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "sender" SET DEFAULT 'Unknown';

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "author" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "githubLink" TEXT,
    "liveLink" TEXT,
    "imgUrl" TEXT DEFAULT 'https://ibb.co/rFMB4ZJ',

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stories" (
    "id" TEXT NOT NULL,
    "story" TEXT NOT NULL,
    "author" TEXT NOT NULL DEFAULT 'Unknown',
    "source" TEXT NOT NULL DEFAULT 'Unknown',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Stories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_title_key" ON "Project"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Project_imgUrl_key" ON "Project"("imgUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Essay_imgUrl_key" ON "Essay"("imgUrl");
