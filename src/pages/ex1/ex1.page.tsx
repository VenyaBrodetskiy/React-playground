import React from 'react'
import { CardListComponent } from '../../components/cardList/cardlist.component'
import { HeaderComponent } from '../../components/header/header.component'
import { IHeader } from '../../interfaces/models/models'

import "./style.css"

const headerProps: IHeader =
{
    imageUrl: './marvel.jpg',
    title: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing",
}

export default function Ex1Page() {
    return (
        <div className="container">
            <HeaderComponent header={headerProps} ></HeaderComponent>
            <CardListComponent />
        </div>
    )
}
