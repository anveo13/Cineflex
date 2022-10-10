import styled from "styled-components"
const ContainerSession = styled.div`
   
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 15px;
    margin-top: 30px;

 
    &  p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;

        color: #293845;
    }
    
    
    & button{
    
        width: 83px;
        height: 43px;
        background: #E8833A;
        border-radius: 3px;
        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.02em;

        color: #FFFFFF;
     
    } 
 `
    


export default ContainerSession