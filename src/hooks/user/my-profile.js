import { useState, useContext, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../../providers/Auth";
import { saveProfile } from "../../services/user/profile";
import { cloneDeep } from "lodash";

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
  const {currentUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = useCallback(async (data) => {
      setLoading(true);
      const result = await saveProfile(cloneDeep({...data, ...props, uid: currentUser.uid}));
      setLoading(false);
      if(Object.keys(result).length === 0) history.push("/");
  }, [props, currentUser, history]);

  return {loading, onSubmit};
};