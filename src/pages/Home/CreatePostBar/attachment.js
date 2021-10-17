import React from "react";

import { AiOutlineGif, AiOutlineVideoCamera } from "react-icons/ai";
import { ImImage  } from "react-icons/im";
import { IoMdCloseCircleOutline } from "react-icons/io";

import {
  AttachmentButton,
  FileUpload,
  FileName,
  RemoveFileButton,
} from "./styles";

export default function Attachment(props) {
  return (
    <>
      <AttachmentButton type="button" onClick={props?.handleClick}>
        <AiOutlineGif size={23}/>
        <ImImage size={20}/>
        <AiOutlineVideoCamera size={25}/>
        <FileUpload 
          ref={props?.hiddenFileInput}
          onChange={props?.handleChange}
          type="file"
          accept="image/*"
        /> 
      </AttachmentButton>
      {
        props?.file &&
        <>
          <FileName>
            {props.file.name}
          </FileName>
          <RemoveFileButton type="button" onClick={props?.cleanFile}>
            <IoMdCloseCircleOutline />
          </RemoveFileButton>
        </>
      }
    </> 
  );
}
