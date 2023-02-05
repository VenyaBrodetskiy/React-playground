import React from 'react';
import { ICard } from '../../interfaces/models/models';

export interface ICardProps {
    card: ICard
}

export function CardComponent({ card }: ICardProps) {
    return (<>
        <li className="list-item-container">
            <img src={card.imageUrl} className="list-image" alt="" />
            <div className="content">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
            </div>
        </li>
    </>)
}