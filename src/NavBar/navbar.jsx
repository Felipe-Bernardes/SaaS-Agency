import React from "react"
import Logo from "../../imgs/Logo.png"
import { Container, Image, Items, Lista, ItensLista, Link, Button} from "./navbar_css"

export default function NavBar() {
    return (
        <Container>
            <Items>
                <Image src={Logo}></Image>
                <Lista>
                    <ItensLista><Link href="#">Home</Link></ItensLista>
                    <ItensLista><Link href="#" color={'#60E1CB'}>Services</Link></ItensLista>
                    <ItensLista><Link href="#" color={'#60E1CB'}>Case</Link></ItensLista>
                    <ItensLista><Link href="#" color={'#60E1CB'}>DeCode Specialists</Link></ItensLista>
                    <ItensLista><Link href="#" color={'#60E1CB'}>Blog</Link></ItensLista>
                    <ItensLista><Button>Request a Quote</Button></ItensLista>
                </Lista>
            </Items>
        </Container>
    )
}