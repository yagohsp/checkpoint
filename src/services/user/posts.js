import { db } from "../../firebase";
import { getDocReference, generateReference } from "../index";

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

const getPostsByUserUid = async (useruid) => {
  const data = await db.collection("posts").where("Usuario", "==", generateReference("usuários", useruid)).get();
  return data.docs;
};

export { save, unsave, getSavedPosts, getPostsByUserUid };
