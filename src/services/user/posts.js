import { db } from "../../firebase";
import { getDocReference } from "../index";

const getSavedPosts = async (referenceList) => {
  var postList = [];
  const promises = referenceList.map(async (post) => postList.push(await getDocReference(post, true)));
  await Promise.all(promises);
  return postList;
};

const save = async (Salvos, postUid, userUid) => {
  var updated_saved_pool = Salvos;
  updated_saved_pool?.push(db.doc('posts/' + postUid));
  return await db.collection("usuários").doc(userUid).update({"Salvos": updated_saved_pool});
};

const unsave = async (Salvos, postUid, userUid) => {
  var updated_saved_pool = Salvos;
  updated_saved_pool = updated_saved_pool?.filter(function(e){ 
    return e.id !== postUid; 
  });
  return await db.collection("usuários").doc(userUid).update({"Salvos": updated_saved_pool});
};

export { save, unsave, getSavedPosts };
