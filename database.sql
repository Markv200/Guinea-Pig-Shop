-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "orders" (
    "id" SERIAL PRIMARY KEY,
    "paymentType" VARCHAR(80),
    "isCash" BOOLEAN,
    "status" VARCHAR(80),
    "isDelivery" BOOLEAN,
    "user_id" integer > user.id
    "address" VARCHAR(255)
);
CREATE TABLE "inventoryType" (
    "id" SERIAL PRIMARY KEY,
    "price" INTEGER NOT NULL,
    "type" VARCHAR(80),
    "description" TEXT,
    "quantity" INTEGER
);

CREATE TABLE "order_inventory" (
    "id" SERIAL PRIMARY KEY,
    "item_id" INTEGER REFERENCES inventoryType(id),
    "order_id" INTEGER REFERENCES orders(id)
);
