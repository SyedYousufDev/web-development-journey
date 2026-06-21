const { faker } = require("@faker-js/faker");

const ibrahim = require("mysql2");

const conn = ibrahim.createConnection({
    host : "localhost",
    user: "root",
    database: "test"
});

let createRandomUser = () => {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.username(), // Fixed: username with a lowercase 'n'
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
};

console.log(createRandomUser());