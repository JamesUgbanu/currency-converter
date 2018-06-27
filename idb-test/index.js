import idb from 'idb';

const dbPromise = idb.open('keyval-store', 1, upgradeDB => {
  upgradeDB.createObjectStore('keyval');
});

// var dbPromise = idb.open('test-db', 1, function(upgradeDb) {
//   switch(upgradeDb.oldVersion) {
//     case 0:
//       var keyValStore = upgradeDb.createObjectStore('keyval');
//       keyValStore.put("world", "hello");
//     case 1:
//       upgradeDb.createObjectStore('people', { keyPath: 'name' });
//     case 2:
//       var peopleStore = upgradeDb.transaction.objectStore('people');
//       peopleStore.createIndex('animal', 'favoriteAnimal');
//     case 3:
//       peopleStore = upgradeDb.transaction.objectStore('people');
//       peopleStore.createIndex('age', 'age');
//   }
// });

// // set "foo" to be "bar" in "keyval"
// dbPromise.then(function(db) {
//   var tx = db.transaction('keyval', 'readwrite');
//   var keyValStore = tx.objectStore('keyval');
//   keyValStore.put('bar', 'foo');
//   return tx.complete;
// }).then(function() {
//   console.log('Added foo:bar to keyval');
// });