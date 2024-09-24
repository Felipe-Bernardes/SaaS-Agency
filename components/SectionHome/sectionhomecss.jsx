import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    heigth: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    aligm-items: center;
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    aligm-items: left;
`

export const SideImage = styled.div`
    width: 600px;
    z-index: 1;
`

export const Imagens = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: ${(props) => props.pos ? props.pos : 'static'};
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    z-index: ${(props) => props.index};
`