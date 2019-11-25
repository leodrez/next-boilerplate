import loadDB from '../../lib/load-firebase';

// PROPS: 
// collection: String = collection to fetch from

const getCollection = async(collection) => {
  const db = await loadDB();

  let products = [];
  let id = [];
  let data = [];

  const ref = await db.collection(collection).get()

  ref.forEach(doc => {
    if (!doc.exists) {
      console.log('No such document')
    }
    id.push(doc.id);
    products.push(doc.data());
  })

  function consolidateData() {
    let i = 0;
    products.map(z => {
      data.push({ id: id[i], ...z });
      i++;
    });
  }

  await consolidateData();

  return data;
};

export default getCollection;