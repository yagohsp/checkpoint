import styled from "styled-components";

export const MessagesWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const MessageList = styled.div`
  display: grid;
`;

export const Message = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  div {
    color: #fff;
    position: relative;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #fff;
    &:before {
      content: '';
      position: absolute;
      visibility: visible;
      top: -0.1rem;
      border: 0.8rem solid transparent;
      border-top: 0.8rem solid #fff;
    }
    &:after {
      content: '';
      position: absolute;
      visibility: visible;
      top: 0rem;
      border: 0.8rem solid transparent;
      clear: both;
    }
    ${(props) => props?.user ? 
      `{
        background: #333333;
        text-align: left;
        float: left;
        left: 1.5rem;
        &:before {
          left: -0.8rem;
        }
        &:after {
          left: -0.6rem;
          border-top: 0.8rem solid #333333;
        }
      }`
      :
      `{
        background: #bc54e0;
        text-align: right;
        float: right;
        right: 1.5rem;
        &:before {
          right: -0.8rem;
        }
        &:after {
          right: -0.6rem;
          border-top: 0.8rem solid #bc54e0;
        }
      }`
    }
  }
`;
