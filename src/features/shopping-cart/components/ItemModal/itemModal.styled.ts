import styled from "styled-components";

export const ModalWrapper = styled.div`
  background: white;
  position: absolute;
  width: 45%;
  top: 50%;
  left: 50%;
  z-index: 10;
  border-radius: 6px;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 20px black;
  padding: 55px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    font-size: 3rem;
  }
  p {
    margin-bottom: 15px;
  }
  button[aria-label="close"] {
    position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    color: lightblue;
  }
`;
