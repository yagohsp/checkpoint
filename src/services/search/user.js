import { db } from "../../firebase";

const getUsers = async (search="") => {
  var data = [];
  const returned = await db.collection("usuários").where('Nome', '>=', search).where('Nome', '<=', search + '\uf8ff').get();
  const promises = returned.docs.map(async (user) => {
    user = {
      uid: user.id,
      ...user.data(),
      gameHours: 0,
      gameQuantity: 0,
      game: {}
    };
    user["gameQuantity"] = user?.Jogos.length;
    user["game"] = user?.Jogos[0] ? user.Jogos[0] : {};
    const game_promises = user?.Jogos.map(async (game) => user["gameHours"] = user.gameHours + parseInt(game.TempoJogo));
    await Promise.all(game_promises);
    data.push(user);
  });
  await Promise.all(promises);
  return data;
};

export { getUsers };
