import styled from "styled-components";

interface SizeProps{
    size: number;
}

interface MaxHeight{
    maxHeight:number;
}

interface Dimension{
    width:string,
    height:string
}

const flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const Container = styled(flex)`
    flex:1;
    height: 100vh;
    font: 400 22px Roboto, sans-serif;
`;

export const Content = styled(flex)<Dimension>`
    margin-top:50px;
    width: ${props=> props.width};
    height: ${props=> props.height};
`;

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    
`;

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    
`;

export const Title = styled.h1<SizeProps>`
    
    padding:10px;
    font-size: ${props => `${props.size}px`};
`;

export const Input = styled.input`
    width:300px;
    padding:10px;
    border: solid 1px rgb(200,200,200); 
    border-radius:4px;
    font: 400 18px Roboto, sans-serif;
`;

export const Button = styled.button`
    background:transparent;
    border:0;
    cursor: pointer;
    margin-left:10px;
    transition:.6s;

`;

export const Ul = styled.ul<MaxHeight>`
    width:300px;
    list-style-type: none;
    max-height: ${props => `${props.maxHeight}px`};
    overflow-y:auto;

    li{
        text-decoration:none;
        padding:10px;
        border: solid 1px rgb(240,240,240); 
        border-width: 0 1px 0 1px;

        &:nth-child(odd){
            background-color:rgb(240,240,240);
        }

        &:last-child{
            border-bottom: solid 1px rgb(240,240,240); 
            border-radius:4px;
        }
    }
    
`;

export const Error = styled.span`
    color:red;
    font-size:12px;
    margin-left:10px;
`;