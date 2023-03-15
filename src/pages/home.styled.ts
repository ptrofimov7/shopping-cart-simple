import styled from "styled-components";

export const StyledProducts = styled.div`
   display: flex;
   justify-content: center;
   margin-left: auto;
   margin-right: auto;
   max-width: 1500px;

.home__container {
   width: 100%;
 }

 .home__row{
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: 10px;
   width: 95%;
   margin: 0 auto;
   z-index: 1;
 }

 .shopping-cart {
   background-color: black;
   position: relative;
   padding: 25px;
   border-radius: 100px;
   position: fixed;
   bottom: 40px;
   right: 10%;
   z-index: 1;
 }

 .shopping-cart:active {
   box-shadow: 0 4px 4px gray;
 }

 #cartIcon{
   color: white;
 }

 .shopping-cart > p{
   position: absolute;
   top: 0;
   right: 0;
   background-color: red;
   padding: 4px 8px;
   color: white;
   border-radius: 50px;
 }
`