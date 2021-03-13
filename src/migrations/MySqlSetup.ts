import { BaseDatabase } from '../data/BaseDatabase';

export class MySqlSetup extends BaseDatabase {

    public static createTables = async (): Promise<void> => {
        try {
            await BaseDatabase.connection.raw(`
                CREATE TABLE IF NOT EXISTS ${BaseDatabase.PRODUCTS_TABLE} (
                    id VARCHAR(255) PRIMARY KEY,
                    title VARCHAR(255) NOT NULL UNIQUE,
                    description VARCHAR(255) NOT NULL,
                    price FLOAT NOT NULL
                );
            `);

            await BaseDatabase.connection.raw(`
                CREATE TABLE IF NOT EXISTS ${BaseDatabase.CATEGORIES_TABLE} (
                    category VARCHAR(255) NOT NULL,
                    product_id VARCHAR(255) NOT NULL UNIQUE,
                    FOREIGN KEY (product_id) REFERENCES ${BaseDatabase.PRODUCTS_TABLE}(id)
                );
            `);

            console.log(`MySQL setup completed!`);
        } catch (error) {
            console.log(error.message);
        } finally {
            BaseDatabase.destroyConnection();
        };
    };
};

MySqlSetup.createTables();