import React from "react";
import { Container, ContainerText, SideImage, Imagens } from "./sectionhomecss"
import Bonecos from "../../imgs/Bonecos.png"
import Cinza from "../../imgs/Espiral-Cinza.png"
import Verde from "../../imgs/Espiral-Verde.png"

export default function SectionHome() {
    return (
        <>
            <Container>
                
                <Imagens src={Verde} width={'450px'} height={'450px'} pos={'relative'} top={'400px'}/>
                <ContainerText>
                    
                </ContainerText>
                <SideImage>
                    <Imagens src={Cinza} width={'200px'} height={'200px'} pos={'relative'} top={'43%'} right={'-50%'} index={'2'}/>
                    <Imagens src={Bonecos} width={'500px'} height={'480px'} index={'3'}/>
                </SideImage>
            </Container>
        </>
    )
}