import styles from '@/components/cards-catalog.module.scss';
import React, { useState } from 'react';
import { RootState, useDispatch, useSelector } from '@/store/store';
import {
    getCardsByFilter,
    getCardsState,
    setCards
} from '@/store/slices/cards-slice';
import { Filter } from '@/constants/constants';
import cx from 'classnames';

const DEFAULT_COUNT = 0;

interface Properties {
    cardCount: number;
    onClickCardButtonHandler: (type: Filter) => void;
    isMobileWidth: boolean;
}

const CardsCatalog: React.FC<Properties> = ({
    cardCount,
    onClickCardButtonHandler,
    isMobileWidth
}) => {
    const [selectedCardId, setSelectedCardId] = useState(DEFAULT_COUNT);
    const { filter, cards: allCards } = useSelector(getCardsState);
    const cards = useSelector((state: RootState) =>
        getCardsByFilter(state, filter)
    );

    const dispatch = useDispatch();

    const onDeleteKeyDownHandler = (
        event: React.KeyboardEvent<HTMLElement>
    ) => {
        if (event.key === 'Delete') {
            const updatedCards = allCards.filter(card => {
                return card.id != selectedCardId;
            });
            dispatch(setCards(updatedCards));
            setSelectedCardId(0);
        }
    };

    const onClickCardHandler = (id: number) => {
        if (selectedCardId === id) {
            setSelectedCardId(DEFAULT_COUNT);
        } else {
            setSelectedCardId(id);
        }
    };

    const catalogCardsList = cards
        .slice(DEFAULT_COUNT, cardCount)
        .map(({ id, type, title, image }) => {
            const isCardSelect = id === selectedCardId;
            const backgroundImage = `url(${image})`;

            return (
                <article
                    style={{ backgroundImage }}
                    onClick={() => onClickCardHandler(id)}
                    key={id}
                    className={cx(styles.card, {
                        [styles.activeCard]: isCardSelect && !isMobileWidth
                    })}
                    onKeyDown={onDeleteKeyDownHandler}
                    tabIndex={0}
                >
                    <button
                        className={styles.cardButton}
                        onClick={() => onClickCardButtonHandler(type)}
                    >
                        {type}
                    </button>
                    <h3 className={styles.cardTitle}>{title}</h3>
                </article>
            );
        });

    return <div className={styles.catalogList}>{catalogCardsList}</div>;
};

export default CardsCatalog;
