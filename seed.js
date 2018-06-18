//const db = require('./models');
const { db, Vegetable, Plot, Gardner } = require('./models');

db.sync()
  .then(() => {
    console.log('database synced');
    //db.close();
  })
  .catch(error => {
    console.log('Something went wrong');
    console.error(error);
  })
  .finally(() => {
    db.close();
  });

Vegetable.create({
  name: 'carrot',
  color: 'orange',
  planted_on: Date.now(),
})
  .then(veg => {
    console.log('veg', veg);
    return veg;
  })
  .catch(err => {
    console.error(err);
  });
// db.close();
