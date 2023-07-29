SELECT 
    DATE_FORMAT(order_timestamp, '%Y-%m') AS month,
    SUM(payment_amount) AS total_sales
FROM
    Orders
JOIN Payments ON Orders.order_id = Payments.order_id
GROUP BY month
ORDER BY month;



SELECT * FROM Categories;
SELECT * FROM Menus;
SELECT * FROM Items;
SELECT * FROM Menus_Items;
SELECT * FROM Transactions;
SELECT * FROM Users;
SELECT * FROM Tables;
SELECT * FROM Reservation;
SELECT * FROM Orders;
SELECT * FROM Payments;
SELECT * FROM Orders_Menus;
SELECT * FROM Menus_Categories;
SELECT * FROM Sales_Report;
SELECT * FROM Inventory;



SELECT
    DATE_FORMAT(transaction_timestamp, '%Y-%m') AS month,
    SUM(quantity) AS total_import_quantity
FROM
    Transactions
WHERE
    transaction_type = 'import'
GROUP BY
    DATE_FORMAT(transaction_timestamp, '%Y-%m')
ORDER BY
    month;