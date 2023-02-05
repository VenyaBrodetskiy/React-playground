import React from 'react';
import { ICard } from '../../interfaces/models/models';
import { CardComponent } from '../card/card.component';

export interface ICards {
    cards: ICard[]
}

const cardsProps: ICard[] = [
    {
        imageUrl: './iron-man.jpg',
        title: "Lorem, ipsum",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi excepturi quae incidunt ad pariatur ducimus.",
    },
    {
        imageUrl: "./bat-man.jpg",
        title: "Lorem, ipsum",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi excepturi quae incidunt ad pariatur ducimus.",
    },
    {
        imageUrl: "./spider-man.jpg",
        title: "Lorem, ipsum",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi excepturi quae incidunt ad pariatur ducimus.",
    }
];

export const CardListComponent = () => {


    return (
        <div className="list-style">
            <CardsHelper
                cards={cardsProps}
            ></CardsHelper>
        </div>
    );
};

const CardsHelper = ({ cards }: ICards) => {
    return (
        <div>
            {cards.map((card: ICard) => {
                return (
                    <div className="list-item-container">
                        <CardComponent
                            card={card}
                        ></CardComponent>
                    </div>
                );
            })}
        </div>
    );
};


