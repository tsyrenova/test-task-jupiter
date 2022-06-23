import React, { useEffect, useState } from 'react';
import styles from './main.module.scss';
import CatalogFilterSelect from '@/components/catalog-filter-select';
import Filters from '@/components/filters';
import {
    getCardsByFilter,
    getCardsState,
    setFilter
} from '@/store/slices/cards-slice';
import { RootState, useDispatch, useSelector } from '@/store/store';
import { Filter } from '@/constants/constants';
import LoadMoreButton from '@/components/load-more-button';
import CardsCatalog from '@/components/cards-catalog';

const BEGIN = 0;
const DEFAULT_CARD_COUNT = 9;

const Main: React.FC = () => {
    const [pageWidth, setPageWidth] = useState(BEGIN);
    const [cardCount, setCardCount] = useState(DEFAULT_CARD_COUNT);
    const { filter } = useSelector(getCardsState);
    const dispatch = useDispatch();
    const cards = useSelector((state: RootState) =>
        getCardsByFilter(state, filter)
    );

    const onChangeWindowWidthHandler = () => {
        setPageWidth(window.screen.availWidth);
    };

    useEffect(() => {
        setPageWidth(window.screen.availWidth);
        window.addEventListener('resize', onChangeWindowWidthHandler);
        return () => {
            window.removeEventListener('resize', onChangeWindowWidthHandler);
        };
    }, []);

    const isMobileWidth = pageWidth <= 1040;

    const onClickCardHandler = (name: Filter) => {
        dispatch(setFilter(name));
    };

    const onClickLoadMoreHandler = () => {
        setCardCount(cardCount + DEFAULT_CARD_COUNT);
    };

    const onResetCardCountHandler = () => {
        setCardCount(DEFAULT_CARD_COUNT);
    };

    const isLoadMoreButtonAvailable = cards.length > cardCount;

    return (
        <main className={styles.main}>
            <section className={styles.catalog}>
                <h2 className={styles.catalogTitle}>Catalog</h2>
                <div className={styles.catalogFilter}>
                    {isMobileWidth ? (
                        <CatalogFilterSelect width={330} />
                    ) : (
                        <Filters
                            onResetCardCountHandler={onResetCardCountHandler}
                        />
                    )}
                </div>
                <CardsCatalog
                    isMobileWidth={isMobileWidth}
                    cardCount={cardCount}
                    onClickCardButtonHandler={onClickCardHandler}
                />
                {isLoadMoreButtonAvailable && (
                    <LoadMoreButton onClick={onClickLoadMoreHandler} />
                )}
            </section>
        </main>
    );
};

export default Main;
