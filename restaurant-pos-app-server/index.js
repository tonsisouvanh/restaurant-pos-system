import express from "express";
import mysql from "mysql";
const app = express();

app.listen(8000, () => {
  console.log("connected to backend");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ton77022880",
  database: "restaurant_db",
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello");
});

//* Get menus
app.get("/menus", (req, res) => {
  const q = "SELECT * FROM `menus`";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

//* Add menus
app.post("/menus", (req, res) => {
  const q = "INSERT INTO menus (`name`, `description`) VALUES (?)";
  const values = [req.body.name, req.body.description];

  db.query(q, [values], (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ error: "Failed to create a new menu item" });
    }

    const newMenuId = result.insertId;
    const name = result.name;
    const description = result.description;
    return res.status(201).json({ id: newMenuId, name, description });
  });
});

//* delete menus
app.delete("/menus/:id", (req, res) => {
  const menuId = req.params.id;
  const q = "DELETE FROM menus WHERE menu_id = ?";

  db.query(q, [menuId], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Failed to delete the menu item" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Menu item not found" });
    }

    return res.status(200).json({ message: "Menu item deleted successfully" });
  });
});


//* update menus
app.put("/menus/:id", (req, res) => {
  const menuId = req.params.id;
  const { name, description } = req.body;

  const q = "UPDATE menus SET name = ?, description = ? WHERE menu_id = ?";
  const values = [name, description, menuId];

  db.query(q, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Failed to update the menu item" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Menu item not found" });
    }
    return res.status(200).json({ message: "Menu item updated successfully" });
  });
});
