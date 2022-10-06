import React, { FC, useState } from 'react';

export enum CardVariant {
    // то как карточка обведена рамкой
    outLined = 'outlined',
    // карточка залита цветом заднего фона
    primary = 'primary'
}

interface CardProps {
    width?: string
    height?: string
    variant: CardVariant
    children: React.ReactNode;
    // функция ничего возвращать не будет, поэтому указываем void
    onClick: (num: number) => void
}

const Card: FC<CardProps> =
    ({
        width,
        height,
        variant,
        onClick,
        children
    }) => {
        const [state, setState] = useState(0)
        return (
            <div style={{
                width, height,
                border: variant === CardVariant.outLined ? '3px solid gray' : 'none',
                background: variant === CardVariant.primary ? 'lightgray' : ''
            }}
                onClick={() => onClick(state)}
            >
                {children}
            </div>
        );
    }

export default Card;