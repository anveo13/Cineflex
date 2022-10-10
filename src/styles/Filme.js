import styled from "styled-components"
const Filme = styled.div`
   
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;  
 
    & > p {
    margin-top: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #293845;

    }
    & > ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    }

    
    & img{
     width: 130px;
     height: 190px;
     box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-top: 10px;
     
    } 
 `
    


export default Filme