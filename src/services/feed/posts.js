import { db } from "../../firebase";

const getPosts = async () => {
  const data = await db.collection("posts").get();
  return data?.docs;
};

export { getPosts };
