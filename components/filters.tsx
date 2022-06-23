import styles from '@/components/filters.module.scss';
import React from 'react';
import { getCardsState, setFilter } from '@/store/slices/cards-slice';
import cx from 'classnames';
import { Filter } from '@/constants/constants';
import { useDispatch, useSelector } from '@/store/store';

const types = [
    { id: '1', name: Filter.SHOW_ALL },
    { id: '2', name: Filter.DESIGN },
    { id: '3', name: Filter.BRANDING },
    { id: '4', name: Filter.MOTION },
    { id: '5', name: Filter.ILLUSTRATION }
];

interface Properties {
    onResetCardCountHandler: () => void;
}

const Filters: React.FC<Properties> = ({ onResetCardCountHandler }) => {
    const dispatch = useDispatch();
    const { filter } = useSelector(getCardsState);

    const onClickHandler = (name: Filter) => {
        dispatch(setFilter(name));
        onResetCardCountHandler();
    };

    return (
        <ul className={styles.catalogFilterList}>
            {types.map(({ id, name }) => {
                const isCurrentFilter = name === filter;
                return (
                    <li
                        onClick={() => onClickHandler(name)}
                        key={id}
                        className={cx(styles.catalogFilterItem, {
                            [styles.activeFilter]: isCurrentFilter
                        })}
                    >
                        {name}
                    </li>
                );
            })}
        </ul>
    );
};

export default Filters;
