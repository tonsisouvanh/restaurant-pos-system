use restaurant_db;
CREATE TABLE Categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Menus (
    menu_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(500),
    price INT NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);



CREATE TABLE Items (
  item_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(500),
  price INT NOT NULL,
  availability VARCHAR(50) NOT NULL,
  stock_quantity INT NOT NULL,
  unit_of_measurement VARCHAR(50)
);

CREATE TABLE Menus_Items (
  menu_item_id INT PRIMARY KEY AUTO_INCREMENT,
  item_id INT,
  menu_id INT,
  FOREIGN KEY (item_id) REFERENCES Items(item_id),
  FOREIGN KEY (menu_id) REFERENCES Menus(menu_id)
);


CREATE TABLE Transactions (
  transaction_id INT PRIMARY KEY AUTO_INCREMENT,
  item_id INT,
  transaction_type ENUM('import', 'use', 'restock', 'sell'),
  quantity DECIMAL(10, 2),
  payment_amount INT,
  payment_method VARCHAR(255),
  transaction_timestamp TIMESTAMP,
  FOREIGN KEY (item_id) REFERENCES Items(item_id)
);


CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE Tables (
  table_id INT PRIMARY KEY AUTO_INCREMENT,
  table_number INT NOT NULL,
  status ENUM('occupied', 'available', 'reserved') NOT NULL,
  occupied_since TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE Reservation (
  reservation_id INT PRIMARY KEY AUTO_INCREMENT,
  customer_id INT NOT NULL,
  table_id INT NOT NULL,
  reservation_datetime DATETIME NOT NULL,
  status ENUM('confirmed', 'canceled', 'pending') NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES Users(user_id),
  FOREIGN KEY (table_id) REFERENCES Tables(table_id)
);


CREATE TABLE Orders (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  table_id INT NOT NULL,
  order_status ENUM('in progress', 'delivered', 'paid') NOT NULL,
  order_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (table_id) REFERENCES Tables(table_id)
);


CREATE TABLE Payments (
  payment_id INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT NOT NULL,
  payment_amount INT NOT NULL,
  payment_method VARCHAR(255) NOT NULL,
  payment_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);


CREATE TABLE Orders_Menus (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    menu_item_id INT,
    quantity INT,
    notes VARCHAR(500),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (menu_item_id) REFERENCES Menus_Items(menu_item_id)
);

CREATE TABLE Menus_Categories (
  menu_category_id INT PRIMARY KEY AUTO_INCREMENT,
  menu_id INT,
  category_id INT,
  FOREIGN KEY (menu_id) REFERENCES Menus(menu_id),
  FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

CREATE TABLE Sales_Report (
  report_id INT PRIMARY KEY AUTO_INCREMENT,
  report_date DATE,
  total_sales INT,
  total_orders INT,
  total_payments INT
);

CREATE TABLE Inventory (
  inventory_id INT PRIMARY KEY AUTO_INCREMENT,
  item_id INT NOT NULL,
  quantity DECIMAL(10, 2) NOT NULL,
  unit_of_measurement VARCHAR(50) NOT NULL,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (item_id) REFERENCES Items(item_id)
);






-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ton77022880'
