import { db } from "../firebase";

const getDocReference = async (reference, object) => {
  const data = await reference.get();
  return object ? data : data?.data();
};

const createTrigger = async (path) => {
  const trigger = db.doc(path);
  return trigger;
};

export { getDocReference, createTrigger };
