import config from 'react-global-configuration';

const getGames = async (search=" ") => {
  try {
    const fetch_config = {
      method: 'GET'
    };
    const returned = await fetch(
      `${config.get("proxy")}https://southamerica-east1-checkpoint-socialnetwork.cloudfunctions.net/search-games?search=${search}&translate=true`, 
      fetch_config
    );
    const data = await returned.json();
    return data.data;

  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getGames };
