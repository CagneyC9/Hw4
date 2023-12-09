const db = require("../util/database");

module.exports = class ItemSales {
    constructor(i, p) {
        this.item = i;
        this.price = p;
    }

    save() {
        return db.execute('insert into Item (ItemName, ItemPrice) ' +
            'values (?, ?)', [this.item, this.price])
    }

    static findById(id) {
        return db.execute("SELECT * FROM Item WHERE ItemID = ?",
            [id]);
    }

    static fetchAll() {
        return db.execute("SELECT i.ItemName, CONCAT('$', FORMAT(SUM(i.ItemPrice * s.Quantity), 2)) AS TotalSales " +
            "FROM Item i LEFT JOIN Sales s ON i.ItemID = s.ItemID " +
            "GROUP BY i.ItemName " +
            "ORDER BY SUM(i.ItemPrice * s.Quantity) DESC");
    }

    static add(data) {
        console.log(data.name);
        console.log(data.price);
        return db.execute('insert into Item (ItemName, ItemPrice)' +
            'values(?, ?)', [data.name, data.price]).then(result => {
            return result[0].insertId
        });

    };

    static update(data) {
        console.log(data)
        return db.execute("UPDATE Item SET ItemName = ?, ItemPrice = ?  WHERE ItemID = ?",
            [data.ItemName, data.ItemPrice, data.id]);
    }
}
