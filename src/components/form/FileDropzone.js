import React, { useEffect } from "react";
import styled from "styled-components";
import { useDropzone } from 'react-dropzone';

const callOnDrop = (files, currentFiles, setCurrentFiles) => {
  if(Array.isArray(currentFiles)) setCurrentFiles(Array.concat(currentFiles, files));
  else setCurrentFiles(files[0]);
};

const MountPreview = ({file}) => {
  return ( 
    <Thumb>
      <ThumbsInner>
        <Image src={file.preview} />
      </ThumbsInner>
    </Thumb> 
  );
};

const MountListItem = ({file}) => {
  return (<ListItem data-icon="🗄️">{file.name}</ListItem>);
};

const FileDropZone = React.forwardRef((
  {currentFiles, setCurrentFiles, maxFiles, maxSize, accept, style, showPreview, showList, dropzoneStyle}, ref) => {
    const {getRootProps, getInputProps} = useDropzone({
      maxFiles: maxFiles,
      maxSize: maxSize,
      accept: accept,
      onDrop: files => callOnDrop(files, currentFiles, setCurrentFiles)
    });

    useEffect(() => () => {
      if(Array.isArray(currentFiles)) currentFiles.map(file => URL.revokeObjectURL(file.preview));
      else if(currentFiles) URL.revokeObjectURL(currentFiles);
    }, [currentFiles]);

    return (
      <section className="container" style={style}>
        <Dropzone style={dropzoneStyle} {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Arraste uma foto até aqui ou clique para adicionar</p>
        </Dropzone>
        {
          showPreview &&
          <ThumbsContainer>
            {
              Array.isArray(currentFiles) ? 
                currentFiles.map(file => <MountPreview file={file} />)
              :
                currentFiles && <MountPreview file={currentFiles} />
            }
          </ThumbsContainer>
        }
        {
          showList &&
          <List role="list">
            {
              Array.isArray(currentFiles) ? 
                currentFiles.map(file => <MountListItem file={file} />)
              :
                currentFiles && <MountListItem file={currentFiles} />
            }
          </List>
        }
      </section>
    );
  }
);

export default FileDropZone;

const Dropzone = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: rgb(139 91 163);
  border-style: dashed;
  color: rgb(191, 191, 191);
  outline: none;
  transition: border 0.24s ease-in-out 0s;
`;

const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16;
`;

const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2;
  border: 1px solid #eaeaea;
  margin-bottom: 8;
  margin-right: 8;
  width: 100;
  height: 100;
  padding: 4;
  box-sizing: border-box;
`;

const ThumbsInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

const List = styled.ul``;

const ListItem = styled.li`
  margin: 0.5em;
  list-style-type: disclosure-closed;
  color: rgb(16 152 0);
`;
