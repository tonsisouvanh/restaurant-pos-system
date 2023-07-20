use restaurant_db
CREATE TABLE Menus (
    menu_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(500)
);

INSERT INTO Menus (name, description) VALUES
    ('Breakfast Menu', 'Delicious breakfast items to start your day.'),
    ('Lunch Menu', 'A variety of mouthwatering dishes for a satisfying lunch.'),
    ('Dinner Menu', 'Elegant and flavorful dinner options for a memorable dining experience.'),
    ('Vegetarian Menu', 'Delectable vegetarian dishes for those who prefer plant-based meals.'),
    ('Seafood Menu', 'Fresh and succulent seafood delicacies from the ocean.'),
    ('Dessert Menu', 'Indulgent desserts to satisfy your sweet cravings.'),
    ('Kids Menu', 'Kid-friendly dishes that little ones will love.'),
    ('Specialty Drinks Menu', 'An assortment of unique and refreshing specialty drinks.'),
    ('Chef\'s Recommendations', 'Handpicked dishes by our talented chef.'),
    ('Seasonal Menu', 'Fresh and seasonal ingredients used to create delightful dishes.');
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ton77022880'

INSERT INTO Menus (name, description) VALUES ('Breakfast Menu', 'Delicious breakfast items to start your day.');