import styled from "styled-components";

export const StyledCart = styled.div`
   display: flex;
   margin: 30px auto;
   height: max-content;
   padding: 20px 20px 0 20px;
   gap: 20px;
   flex: 1;
   position: relative;
.card__btn-link {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    display: block;
    background: gray;
    color: white;
    padding: 10px;
    border-radius: 10px;

  }
 .cart__left{
   padding: 20px;
   width: 100%;
   background-color: white;
 }

 .cart__left h3{
   font-size: 32px;
   font-weight: 450;
   padding-bottom: 20px;
   border-bottom: 1px solid gainsboro;
 }

 .cart__title{
   margin-right: 10px;
   padding: 10px;
   border-bottom: 1px solid lightgray;
 }


 @media(max-width: 800px){
   & {
     flex-direction: column-reverse;
     margin: unset;
   }

   .cart__left{
     width: calc(100% - 40px);
   }
 }
`