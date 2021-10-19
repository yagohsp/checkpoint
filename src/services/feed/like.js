import { db } from "../../firebase";
import { arrayRemove } from "../../util/array";
import { getPost } from "./posts";

const like = async (postUid, userUid) => {
  var updated_liked_pool = await getPost(postUid);
  updated_liked_pool = updated_liked_pool?.Curtidas;
  updated_liked_pool?.push(userUid);

  await db.collection("posts").doc(postUid).update({"Curtidas": updated_liked_pool});
  return updated_liked_pool;
};

const deslike = async (postUid, userUid) => {
  var updated_liked_pool = await getPost(postUid);
  updated_liked_pool = arrayRemove(updated_liked_pool?.Curtidas, userUid);

  await db.collection("posts").doc(postUid).update({"Curtidas": updated_liked_pool});
  return updated_liked_pool;
};

export { like, deslike };
