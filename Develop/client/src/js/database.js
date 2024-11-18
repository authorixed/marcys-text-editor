import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  export const putDb = async (content) => {
    console.log('PUT to the database');
    const db = await openDB('jate', 1); // Open the database
    const tx = db.transaction('jate', 'readwrite'); // Start a readwrite transaction
    const store = tx.objectStore('jate'); // Access the object store
    const result = await store.put({ id: 1, content }); // Add the content to the store
    console.log('Data saved to the database', result);
  };
  
  export const getDb = async () => {
    console.log('GET from the database');
    const db = await openDB('jate', 1); // Open the database
    const tx = db.transaction('jate', 'readonly'); // Start a readonly transaction
    const store = tx.objectStore('jate'); // Access the object store
    const result = await store.get(1); // Retrieve the content with id 1
    console.log('Data retrieved from the database', result?.content);
    return result?.content;
  };
  

initdb();
