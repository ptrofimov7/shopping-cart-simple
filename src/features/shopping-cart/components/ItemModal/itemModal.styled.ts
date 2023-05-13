import styled from "styled-components";

export const ModalLayout = styled.div`
width: 100%;
height: 100%;
z-index: 2;
background-color: #000;
opacity: 0.5;
position: fixed;
top: 0;
left: 0;
display: block;
margin: 0;
padding: 0;
`

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
  .save-btn {
   display: block;
   margin-top: 20px;
   padding: 10px 30px;
   font-size: 18px;
   border-radius: 10px;
   background: orange;
   cursor: pointer;
  }
  .quantity {
   display: flex;
   gap: 20px;
   align-items:center;
  }
  .quantity input {
   padding: 5px 15px;
   border-radius: 10px;
  }
`;
