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
    const game_promises = user?.Jogos.map(async (game) => user["gameHours"] = user.gameHours + parseInt(game.TempoJogo) || 0);
    await Promise.all(game_promises);
    data.push(user);
  });
  await Promise.all(promises);
  return data;
};

const getUsersByGames = async (search_terms={}) => {
  const {
    name = undefined, 
    level = undefined, 
    rank = undefined, 
    playedHours = undefined, 
    gamingMode = undefined
  } = search_terms;

  var data = [];
  const returned = await db.collection("usuários").get();
  const promises = returned.docs.map(async (user) => {
    var include_user = false;

    user = {
      uid: user.id,
      ...user.data(),
      gameHours: 0,
      gameQuantity: 0,
      game: {}
    };
    user["gameQuantity"] = user?.Jogos.length;
    user["game"] = user?.Jogos[0] ? user.Jogos[0] : {};
    const game_promises = user?.Jogos.map(async (game) => {
      user["gameHours"] = user.gameHours + parseInt(game.TempoJogo) || 0;
      const conditional = [
        game.Jogo && name && String(game.Jogo).includes(name),
        game.Nivel && level && String(game.Nivel).includes(level),
        game.Rank && rank && String(game.Rank).includes(rank),
        game.TempoJogo && playedHours && String(game.TempoJogo).includes(playedHours),
        game.ModoJogo && gamingMode && String(game.ModoJogo).includes(gamingMode),
      ];
      if(!conditional.includes(false)) include_user = true;
    });
    await Promise.all(game_promises);

    if(include_user) data.push(user);
  });
  await Promise.all(promises);
  return data;
};

export { getUsers, getUsersByGames };
