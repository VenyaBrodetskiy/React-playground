import React from 'react';
import { IHeader } from '../../interfaces/models/models';

export interface IHeaderProps {
    header: IHeader
}

export function HeaderComponent({ header }: IHeaderProps) {
    return (<>
        <img src={header.imageUrl} className="image-main" alt="" />
        <h1>{header.title}</h1>
        <h2>{header.description}</h2>
    </>)
}