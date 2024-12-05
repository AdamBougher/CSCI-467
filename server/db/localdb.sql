CREATE TABLE IF NOT EXISTS "quantity" (
    "qty" INTEGER NOT NULL,
    "number" INTEGER NOT NULL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS "orders" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "date" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "weight" DECIMAL(9,2) DEFAULT 0.00,
    "total" DECIMAL(9,2) DEFAULT 0.00,
    "shippingCost" DECIMAL(9,2) DEFAULT 0.00,
    "Shipped" INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS "weightRanges" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "weight" DECIMAL(9,2) DEFAULT 0.00,
    "cost" DECIMAL(9,2) DEFAULT 0.00
);

INSERT INTO "weightRanges" (weight, cost) VALUES 
(0, 10.00),
(10, 15.00),
(25, 25.00),
(40, 30.00),
(80, 50.00),
(100, 100.00),
(200, 250.00);

INSERT INTO orders (name, email, address, weight, total, shippingCost) VALUES
('Adam Bougher', 'adam@email.com', '1234 Main St, Anytown, USA', 10, 100.00, 15.00),
('Jane Doe', 'jane@mail.com', '1234 Elm St, Anytown, USA', 25, 250.00, 25.00);
