-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "published" INTEGER NOT NULL,
    "description" TEXT NOT NULL DEFAULT 'No description'
);
