import { openDB } from "idb";

const DATABASE_NAME = "feedme-idb";
const DATABASE_VERSION = 1;

const db = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore("favourite-restaurants", {
      keyPath: "id",
    });
  },
});

export default db;
