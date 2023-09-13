import React from 'react'
import {ContainerItens as Container} from "../ContainerItens/styles"

function ContainerItens({children,isBlur}){


    return <Container isBlur>{children}</Container>
}

export default ContainerItens