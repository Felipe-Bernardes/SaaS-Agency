import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 9vh;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Items = styled.div`
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`

export const Image = styled.img`
    width: 196px;
    heigth: 22px;

`


export const Lista = styled.ul`
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
`

export const ItensLista = styled.li`
`

export const Link = styled.a`
    color: ${(props) => props.color ? props.color : 'black'};
    text-decoration: none;
`

export const Button = styled.button`
    color: white;
    background-color: #6DC5F1;
    width: 160px;
    height: 40px;
    border-radius: 13pt;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover{ 
        background-color: #7BC0E3;
    
    }
`