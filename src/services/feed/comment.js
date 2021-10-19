import { db } from "../../firebase";
import { getDocReference } from "../index";
import { getPost } from "./posts";

const getComments = async (uid) => {
  const data = await getPost(uid);
  var commentList = [];
  const promises = data?.Comentarios.map(
    async (comment) => commentList.push({
      Comentario: comment.Comentario,
      Usuario: await getDocReference(comment.Usuario)
    })
  );
  await Promise.all(promises);
  return commentList;
};

const createComment = async (data) => {
  var updated_comment_pool = await getPost(data.postUid);
  updated_comment_pool = updated_comment_pool?.Comentarios;
  updated_comment_pool?.push({
    Comentario: data.comment,
    Usuario: db.doc(`usuários/${data.uid}`)
  });
  return await db.collection("posts").doc(data.postUid).update({"Comentarios": updated_comment_pool});
};

export { getComments, createComment };
