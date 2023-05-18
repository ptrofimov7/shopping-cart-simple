import styled from "styled-components";

export const TotalSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 270px;
  height: 110px;
  padding: 20px;
  background: white;
  border-radius: 3px;
  min-width: 350px;

& > h3{
  font-weight: 400;
}

& > p {
  font-size: 20px;
  font-weight: 450;
  color: rgb(72, 77, 77);
}

& > button:active{
  background-color: unset;
  border: 1px solid #FFD814;
}

@media(max-width:800px){
    width: unset;
    text-align: center;
}

@media(max-width:900px){
    min-width: unset;
}
`