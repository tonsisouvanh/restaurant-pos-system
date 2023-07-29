USE restaurant_db;

-- Categories
INSERT INTO Categories (name)
VALUES
  ('Appetizers'),
  ('Main Course'),
  ('Desserts'),
  ('Beverages'),
  ('Salads'),
  ('Soups'),
  ('Specials'),
  ('Side Dishes'),
  ('Combos'),
  ('Kids Menu');

-- Menus
INSERT INTO Menus (name, description, price, category_id)
VALUES
  ('Vegetable Spring Rolls', 'Crispy vegetable spring rolls served with dipping sauce.', 49900, 1),
  ('Grilled Salmon', 'Fresh grilled salmon seasoned with herbs and lemon.', 125000, 2),
  ('Chocolate Fudge Cake', 'Decadent chocolate cake topped with fudge sauce.', 35900, 3),
  ('Iced Coffee', 'Refreshing iced coffee with a hint of caramel.', 9990, 4),
  ('Greek Salad', 'Classic Greek salad with tomatoes, cucumbers, olives, and feta cheese.', 35000, 5),
  ('Tomato Basil Soup', 'Creamy tomato soup with fresh basil.', 24900, 6),
  ('Chef\'s Special', 'Chef\'s special dish with a mix of flavors.', 79900, 7),
  ('Garlic Bread', 'Garlic-flavored bread slices, perfect as a side.', 25000, 8),
  ('Family Combo', 'A combo meal for the whole family.', 299900, 9),
  ('Kids Cheeseburger', 'Kids-sized cheeseburger with fries.', 69900, 10);

-- Items
INSERT INTO Items (name, description, price, availability, stock_quantity, unit_of_measurement)
VALUES
  ('Spring Roll Wrappers', 'Thin wrappers for making spring rolls.', 2990, 'In Stock', 100, 'packs'),
  ('Salmon Fillet', 'Fresh salmon fillet, boneless and skinless.', 125000, 'In Stock', 50, 'pieces'),
  ('Chocolate Chips', 'High-quality chocolate chips for baking.', 4750, 'In Stock', 200, 'bags'),
  ('Coffee Beans', 'Premium coffee beans for making coffee.', 8990, 'In Stock', 100, 'pounds'),
  ('Tomatoes', 'Fresh ripe tomatoes, locally sourced.', 1500, 'In Stock', 150, 'pounds'),
  ('Basil Leaves', 'Fresh basil leaves for adding flavor to dishes.', 1250, 'In Stock', 50, 'ounces'),
  ('Chef\'s Secret Sauce', 'A unique sauce created by our chef.', 3990, 'In Stock', 50, 'bottles'),
  ('Bread Loaf', 'Freshly baked bread loaf.', 2250, 'In Stock', 30, 'loaves'),
  ('Family Combo Package', 'A combo package for the family.', 299990, 'In Stock', 20, 'packages'),
  ('Kids Menu Package', 'A special package for kids.', 69990, 'In Stock', 15, 'packages');

-- Menus_Items
INSERT INTO Menus_Items (item_id, menu_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6),
  (7, 7),
  (8, 8),
  (9, 9),
  (10, 10);
  
-- Transactions
INSERT INTO Transactions (item_id, transaction_type, quantity, payment_amount, payment_method, transaction_timestamp)
VALUES
  (1, 'import', 500, 100000, 'Bank Transfer', '2023-07-19 10:00:00'),
  (2, 'import', 200, 250000, 'Cash', '2023-07-20 15:30:00'),
  (3, 'restock', 100, 47500, 'Credit Card', '2023-07-21 12:45:00'),
  (4, 'use', 75, 30000, 'Cash', '2023-07-22 18:20:00'),
  (5, 'sell', 50, 7500, 'Credit Card', '2023-07-23 14:10:00'),
  (6, 'import', 300, 60000, 'Bank Transfer', '2023-07-24 09:55:00'),
  (7, 'restock', 25, 10000, 'Credit Card', '2023-07-25 11:30:00'),
  (8, 'use', 10, 30000, 'Cash', '2023-07-26 17:00:00'),
  (9, 'sell', 15, 50000, 'Credit Card', '2023-07-27 13:15:00'),
  (10, 'import', 100, 20000, 'Bank Transfer', '2023-07-28 10:30:00');
  
  
-- Users
INSERT INTO Users (username, email, password_hash, role, is_active)
VALUES
  ('john_doe', 'john@example.com', 'hashed_password_1', 'manager', true),
  ('jane_smith', 'jane@example.com', 'hashed_password_2', 'waiter', true),
  ('chef_mike', 'mike@example.com', 'hashed_password_3', 'chef', true),
  ('cashier_ann', 'ann@example.com', 'hashed_password_4', 'cashier', true),
  ('customer1', 'customer1@example.com', 'hashed_password_5', 'customer', true),
  ('customer2', 'customer2@example.com', 'hashed_password_6', 'customer', true),
  ('customer3', 'customer3@example.com', 'hashed_password_7', 'customer', true),
  ('customer4', 'customer4@example.com', 'hashed_password_8', 'customer', true),
  ('customer5', 'customer5@example.com', 'hashed_password_9', 'customer', true),
  ('customer6', 'customer6@example.com', 'hashed_password_10', 'customer', true);

-- Tables
INSERT INTO Tables (table_number, status, occupied_since)
VALUES
  (1, 'available', NULL),
  (2, 'occupied', '2023-07-19 12:30:00'),
  (3, 'available', NULL),
  (4, 'reserved', '2023-07-20 18:45:00'),
  (5, 'available', NULL),
  (6, 'occupied', '2023-07-21 14:15:00'),
  (7, 'available', NULL),
  (8, 'available', NULL),
  (9, 'reserved', '2023-07-22 10:00:00'),
  (10, 'available', NULL);

-- Reservation
INSERT INTO Reservation (customer_id, table_id, reservation_datetime, status)
VALUES
  (5, 4, '2023-07-25 18:30:00', 'confirmed'),
  (6, 9, '2023-07-27 19:00:00', 'confirmed'),
  (7, 2, '2023-07-30 20:15:00', 'pending'),
  (8, 3, '2023-08-02 12:00:00', 'confirmed'),
  (9, 7, '2023-08-05 14:30:00', 'pending'),
  (10, 1, '2023-08-08 16:45:00', 'pending'),
  (5, 5, '2023-08-10 18:30:00', 'confirmed'),
  (6, 8, '2023-08-12 19:00:00', 'confirmed'),
  (7, 10, '2023-08-15 20:15:00', 'confirmed'),
  (8, 6, '2023-08-18 12:00:00', 'confirmed');

-- Orders
INSERT INTO Orders (table_id, order_status, order_timestamp)
VALUES
  (2, 'in progress', '2023-07-25 12:45:00'),
  (6, 'delivered', '2023-07-26 19:30:00'),
  (3, 'paid', '2023-07-27 14:15:00'),
  (8, 'in progress', '2023-07-28 11:00:00'),
  (1, 'delivered', '2023-07-29 15:45:00'),
  (10, 'paid', '2023-07-30 17:30:00'),
  (4, 'in progress', '2023-07-31 13:15:00'),
  (9, 'delivered', '2023-08-01 18:00:00'),
  (5, 'paid', '2023-08-02 16:45:00'),
  (7, 'in progress', '2023-08-03 12:30:00');

-- Payments
INSERT INTO Payments (order_id, payment_amount, payment_method, payment_timestamp)
VALUES
  (1, 3550, 'Credit Card', '2023-07-25 13:00:00'),
  (2, 5075, 'Cash', '2023-07-26 19:45:00'),
  (3, 22000, 'Credit Card', '2023-07-27 14:30:00'),
  (4, 15000, 'Cash', '2023-07-28 11:30:00'),
  (5, 6025, 'Credit Card', '2023-07-29 16:15:00'),
  (6, 4590, 'Cash', '2023-07-30 18:00:00'),
  (7, 2875, 'Credit Card', '2023-07-31 13:45:00'),
  (8, 4000, 'Cash', '2023-08-01 18:30:00'),
  (9, 1650, 'Credit Card', '2023-08-02 17:15:00'),
  (10, 2200, 'Cash', '2023-08-03 13:00:00');

-- Orders_Menus
INSERT INTO Orders_Menus (order_id, menu_item_id, quantity, notes)
VALUES
  (1, 1, 2, 'Extra dipping sauce'),
  (1, 3, 1, NULL),
  (2, 2, 1, 'Medium rare'),
  (2, 5, 1, 'No olives'),
  (3, 3, 2, NULL),
  (3, 4, 1, 'Extra caramel'),
  (4, 8, 3, NULL),
  (4, 10, 1, 'Kid prefers ketchup'),
  (5, 7, 1, NULL),
  (5, 9, 2, NULL),
  (6, 6, 1, NULL),
  (6, 2, 2, 'With lemon wedges'),
  (7, 5, 2, 'Extra feta cheese'),
  (7, 1, 1, NULL),
  (8, 4, 1, NULL),
  (8, 7, 1, NULL),
  (9, 10, 1, NULL),
  (9, 8, 2, NULL),
  (10, 9, 1, NULL),
  (10, 3, 1, 'Extra cream');

-- Menus_Categories
INSERT INTO Menus_Categories (menu_id, category_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6),
  (7, 7),
  (8, 8),
  (9, 9),
  (10, 10);

-- Sales_Report
INSERT INTO Sales_Report (report_date, total_sales, total_orders, total_payments)
VALUES
  ('2023-07-25', 8950, 3, 3),
  ('2023-07-26', 5875, 2, 2),
  ('2023-07-27', 3700, 2, 2),
  ('2023-07-28', 2500, 1, 1),
  ('2023-07-29', 6025, 1, 1),
  ('2023-07-30', 4590, 1, 1),
  ('2023-07-31', 2875, 1, 1),
  ('2023-08-01', 4000, 1, 1),
  ('2023-08-02', 1650, 1, 1),
  ('2023-08-03', 2200, 1, 1);
 

-- Add more records for Reservation table
INSERT INTO Reservation (customer_id, table_id, reservation_datetime, status)
VALUES
  (7, 6, '2023-08-05 18:30:00', 'confirmed'),
  (8, 5, '2023-08-12 19:00:00', 'confirmed'),
  (9, 4, '2023-08-15 20:15:00', 'confirmed'),
  (10, 3, '2023-08-18 12:00:00', 'confirmed'),
  (5, 1, '2023-08-25 14:30:00', 'pending'),
  (6, 10, '2023-08-27 16:45:00', 'confirmed'),
  (7, 9, '2023-09-02 18:30:00', 'pending'),
  (8, 8, '2023-09-08 19:00:00', 'confirmed'),
  (9, 7, '2023-09-15 20:15:00', 'confirmed'),
  (10, 2, '2023-09-18 12:00:00', 'pending');

-- Add more records for Orders table
INSERT INTO Orders (table_id, order_status, order_timestamp)
VALUES
  (1, 'in progress', '2023-08-01 12:45:00'),
  (2, 'delivered', '2023-08-02 19:30:00'),
  (3, 'paid', '2023-08-03 14:15:00'),
  (4, 'in progress', '2023-08-04 11:00:00'),
  (5, 'delivered', '2023-08-05 15:45:00'),
  (6, 'paid', '2023-08-06 17:30:00'),
  (7, 'in progress', '2023-09-01 13:15:00'),
  (8, 'delivered', '2023-09-02 18:00:00'),
  (9, 'paid', '2023-09-03 16:45:00'),
  (10, 'in progress', '2023-09-04 12:30:00');

-- Add more records for Payments table
INSERT INTO Payments (order_id, payment_amount, payment_method, payment_timestamp)
VALUES
  (1, 4550, 'Credit Card', '2023-08-01 13:00:00'),
  (2, 9075, 'Cash', '2023-08-02 19:45:00'),
  (3, 3020, 'Credit Card', '2023-08-03 14:30:00'),
  (4, 10500, 'Cash', '2023-08-04 11:30:00'),
  (5, 6000, 'Credit Card', '2023-08-05 16:15:00'),
  (6, 4000, 'Cash', '2023-08-06 18:00:00'),
  (7, 3010, 'Credit Card', '2023-09-01 13:45:00'),
  (8, 6500, 'Cash', '2023-09-02 18:30:00'),
  (9, 4200, 'Credit Card', '2023-09-03 17:15:00'),
  (10, 2700, 'Cash', '2023-09-04 13:00:00');

