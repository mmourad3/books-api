/*
  Warnings:

  - Added the required column `description` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "published" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Book" ("author", "id", "published", "title") SELECT "author", "id", "published", "title" FROM "Book";
DROP TABLE "Book";
EXEC sp_rename 'new_Book', 'Book';
