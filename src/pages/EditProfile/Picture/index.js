import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

import {
  SpaceBetweenDiv,
  LittleButton,
  PictureInput,
  HiddenInput,
} from "../styles";

export default function Picture(props) {
  const {
    file,
    hiddenFileInput,
    handleClick, 
    handleChange
  } = props;

  return (
    <PictureInput>
        <SpaceBetweenDiv>
            <label>Imagem de perfil</label>
            <LittleButton 
            type="button" 
            onClick={handleClick}
            >
            <AiOutlineCloudUpload />
            </LittleButton>
        </SpaceBetweenDiv>
        <img
            src={file}
            alt="eu"
        />
        <HiddenInput 
            ref={hiddenFileInput}
            onChange={handleChange}
            type="file"
            accept="image/*"
        />
    </PictureInput>
  );
}
