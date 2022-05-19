-- CreateTable
CREATE TABLE "todos" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "createdAt" INTEGER NOT NULL,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
