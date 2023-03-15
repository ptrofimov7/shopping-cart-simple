import styled from "styled-components";

export const StyledProduct = styled.div`
   display: flex;
   flex-direction: column;
   z-index: 1;
   width: calc(100% - 40px);
   margin: 0 auto;
   align-items: center;
   justify-content: space-between;
   background-color: white;
   padding: 20px;

 .item__rating__star{
   color: #FEBD69;
 }

 & > img {
   max-height: 200px;
   width: 100%;
   object-fit: contain;
   margin-bottom: 15px;
 }

 & > button {
   background: #FFD814;
   margin-top: 10px;
   color: #111;
   border-radius: 20px;
   padding: 8px 30px;
   border: none;
 }

 & > button:hover {
   background: #f7d322;
 }

 & > button:active {
   background: #FFD814;
 }

 .item__price{
   margin-top: 5px;
 }

 .item__info{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-bottom: 15px;
   line-height: 25px;
 }

 @media(max-width: 786px){
   .item__info{
     height: 120px;
   }
 }

 @media(max-width: 600px){
   & {
     margin-bottom: 10px;
   }

   .item__info{
     justify-content: unset;
   }
 }
`