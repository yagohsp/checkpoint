import React, { useEffect } from "react";
import { AiFillDelete, AiFillCloseSquare } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri"

import FileHook from "../../../hooks/file";
import {
  GameContent,
  GameStats,
  Screenshots,
  GameTitle,
  HiddenInput,
  AddImage,
  Screenshot
} from "../styles";

export default function Game(props={}) {
    const {
        data, 
        removeGame, 
        changeGameFieldValue,
        addFile,
        removeFile
    } = props;
    const {
        file,
        hiddenFileInput,
        handleChange,
        handleClick,
        cleanFile
    } = FileHook({
        base64: false,
        defaultFile: data?.Foto
    });

    useEffect(() => {
        if(file) {
            addFile(file)
            cleanFile();
        };
    }, [addFile, file, cleanFile]);

    return (
        <GameContent>
            <GameTitle>
                <input 
                    placeholder="Nome do jogo..."
                    value={data?.Jogo} 
                    onChange={(event) => changeGameFieldValue({event, field: "Jogo"})} 
                />
                <button type="button" onClick={removeGame}>
                    <AiFillDelete />
                </button>
            </GameTitle>
            <GameStats>
                <div>
                    <label>Nível</label>
                    <input 
                        value={data?.Nivel} 
                        onChange={(event) => changeGameFieldValue({event, field: "Nivel"})} 
                    />
                </div>
                <div>
                    <label>Rank</label>
                    <input 
                        value={data?.Rank} 
                        onChange={(event) => changeGameFieldValue({event, field: "Rank"})} 
                    />
                </div>
                <div>
                    <label>Modo de jogo</label>
                    <input 
                        value={data?.ModoJogo} 
                        onChange={(event) => changeGameFieldValue({event, field: "ModoJogo"})} 
                    />
                </div>
                <div>
                    <label>Tempo de jogo</label>
                    <input 
                        value={data?.TempoJogo} 
                        onChange={(event) => changeGameFieldValue({event, field: "TempoJogo"})} 
                    />
                </div>
                <div>
                    <label>Joga desde</label>
                    <input 
                        value={data?.JogaDesde} 
                        onChange={(event) => changeGameFieldValue({event, field: "JogaDesde"})} 
                    />
                </div>
            </GameStats>
            <Screenshots>
                <label>Screenshots</label>
                {
                    data?.Capturas?.map(
                    (screenshot, index) => {
                        const path = typeof(screenshot) === "string" ? screenshot : URL.createObjectURL(screenshot);
                        return (
                            <Screenshot key={index}>
                                <img src={path} alt={index} />
                                <button onClick={() => removeFile(index)}>
                                    <AiFillCloseSquare />
                                </button>
                            </Screenshot>
                        );
                    })
                }
                <Screenshot>
                    <AddImage onClick={handleClick}>
                        <RiImageAddFill />
                    </AddImage>
                </Screenshot>
                <HiddenInput 
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    type="file"
                    accept="image/*"
                />
            </Screenshots>
        </GameContent>
    );
}
