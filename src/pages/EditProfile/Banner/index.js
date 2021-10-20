import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

import {
  SpaceBetweenDiv,
  LittleButton,
  BannerInput,
  HiddenInput,
} from "../styles";

export default function Banner(props) {
  const {
    file,
    hiddenFileInput,
    handleClick, 
    handleChange
  } = props;

  return (
    <BannerInput>
      <SpaceBetweenDiv>
        <label>Banner</label>
        <LittleButton 
          type="button" 
          onClick={handleClick}
        >
          <AiOutlineCloudUpload />
        </LittleButton>
      </SpaceBetweenDiv>
      <img
        src={file}
        alt="banner"
      />
      <HiddenInput 
        ref={hiddenFileInput}
        onChange={handleChange}
        type="file"
        accept="image/*" 
      />
    </BannerInput>
  );
}
