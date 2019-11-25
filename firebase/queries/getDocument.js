import loadDB from '../../lib/load-firebase';

// PROPS
// collection: String = collection to retreive doc from
// id: String = document id

const getDocument = async (collection, id) => {
  const db = await loadDB();

  const data = await db
    .collection(collection)
    .doc(id)
    .get()
    .then(doc => {
      if (!doc.exists) {
        console.log("No such document");
      } else {
        return doc.data();
      }
    })
    .catch(err => {
      console.log("Error getting document");
    });
    return data;
};

export default getDocument;
