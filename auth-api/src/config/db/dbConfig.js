const Sequelize = require("sequelize");

const sequelize = new Sequelize("auth-db", "admin", "123456", {
    host: "192.168.2.72",
    dialect: "postgres",
    quoteIdentifiers: false,
    define: {
        syncOnAssociation: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true,
        freezeTableName: true
    },
});

sequelize
.authenticate()
.then( () => {
    console.info("Connection has been stablished");
})
.catch((err) => {
    console.info("Unable connection has been stablished");
    console.info(err.message);
});

export default sequelize;

