import firebase, { db } from "../firebase";

const getDocReference = async (reference, object) => {
  const data = await reference.get();
  return object ? data : data?.data();
};

const generateReference = (collection, doc) => {
  return db.collection(collection).doc(doc);
};

const createTrigger = async (path) => {
  const trigger = db.doc(path);
  return trigger;
};

const uploadImageToBucket = async (file) => {
  const storageRef = firebase.storage("gs://checkpoint-socialnetwork.appspot.com").ref();
  const metadata = {contentType: file.type};
  const fileRef = storageRef.child(file.name);
  const uploadTaskSnapshot = await fileRef.put(file, metadata);
  return await uploadTaskSnapshot.ref.getDownloadURL();
};

export { getDocReference, createTrigger, uploadImageToBucket, generateReference };
