-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "projectUrl" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
