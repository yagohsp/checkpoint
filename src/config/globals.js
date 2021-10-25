import config from 'react-global-configuration';

const initConfig = () => {
    config.set({
        proxy: "https://mighty-hamlet-12420.herokuapp.com/"
    });
}; 

export {initConfig};