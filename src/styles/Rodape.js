import styled from "styled-components"
const Rodape = styled.div`
   
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row; 
    background: #DFE6ED;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 115px ;

 
    &  p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845;
    }
    
    
    & img{
     width: 50px;
     box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-top: 10px;
     
    } 
 `
    


export default Rodape