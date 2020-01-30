const db = require("../data/db-config");

module.exports = {
  find,
  add,
  findById,
  findByUser
};

// get all users

function find() {
  return db("users");
}

// get a user by id

function findById(id) {
  return db("users")
    .select("id", "username", "department")
    .where({ id })
    .first();
}

// Register a user

function add(user) {
  return db("users")
    .insert(user)
    .then(result => {
      const [id] = result;
      return findById(id);
    });
}

function findByUser(username) {
  return db("users")
    .where({ username})
    .first();
}
