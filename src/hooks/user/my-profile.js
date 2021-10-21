import { useState, useContext, useEffect, useCallback } from "react";

import { AuthContext } from "../../providers/Auth";

export default function MyProfile() {
  const {currentUserData} = useContext(AuthContext);
  const [data, setData] = useState({});

  const addGame = useCallback(() => {
    var currentGames = data?.Jogos;
    currentGames?.push({
      Imdb: "",
      Jogo: "",
      Nivel: "",
      Rank: "",
      ModoJogo: "",
      TempoJogo: "",
      JogaDesde: "",
      Capturas: []
    });
    setData({...data, Jogos: currentGames});
  }, [data]);

  const removeGame = useCallback((index) => {
    var currentGames = data?.Jogos;
    currentGames.splice(index, 1);
    setData({...data, Jogos: currentGames});
  }, [data]);

  const changeGameFieldValue = useCallback((fieldProps) => {
    const {index, field, event} = fieldProps;
    var currentGames = data.Jogos;
    currentGames[index] = {
      ...currentGames[index],
      [field]: event.target.value
    };
    setData({...data, Jogos: currentGames});
  }, [data]);

  const addFile = useCallback((fileProps) => {
    const {index, file} = fileProps;
    var currentGames = data.Jogos;
    currentGames[index].Capturas.push(file);
    setData({...data, Jogos: currentGames});
  }, [data]);

  const removeFile = useCallback((fileProps) => {
    const {index, fileIndex} = fileProps;
    var currentGames = data.Jogos;
    currentGames[index].Capturas.splice(fileIndex, 1);
    setData({...data, Jogos: currentGames});
  }, [data]);

  useEffect(() => {
    if(currentUserData) setData(currentUserData);
  }, [currentUserData]);

  return {data, addGame, removeGame, changeGameFieldValue, addFile, removeFile};
};

export function SaveProfile(props) {
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(async (data) => {
      setLoading(true);
      console.warn({...data, ...props});
      //await createPost({...data, file, uid: currentUser.uid});
      setLoading(false);
  }, [props]);

  return {loading, onSubmit};
};