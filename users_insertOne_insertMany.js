db.users.insertOne(
    {
        first_name: "Nancy",
        last_name: "Smith",
        phone: "523-456-0987",
        age: 25
    }
)


db.users.insertMany([
    {
        first_name: "Douglas",
        last_name: "Lowel",
        phone: "523-476-8907",
        age: 23
    },
    {
        first_name: "Kai",
        last_name: "Tran",
        phone: "919-876-1234",
        age: 43,
    },
    {
        first_name: "Linzey",
        last_name: "Rivers",
        phone: "765-902-3456",
        age: 54,
    },
    {
        first_name: "Mira",
        last_name: "Chan",
        phone: "765-098-1234",
        age: 88,
    }
])