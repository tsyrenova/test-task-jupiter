// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';
import ArrowIcon from '@/assets/icons/arrow-icon';
import styles from './catalog-filter-select.module.scss';
import { getCardsState, setFilter } from '@/store/slices/cards-slice';
import { Filter } from '@/constants/constants';
import { useDispatch, useSelector } from '@/store/store';

const options = [
    { value: Filter.SHOW_ALL, label: Filter.SHOW_ALL },
    { value: Filter.DESIGN, label: Filter.DESIGN },
    { value: Filter.BRANDING, label: Filter.BRANDING },
    { value: Filter.ILLUSTRATION, label: Filter.ILLUSTRATION },
    { value: Filter.MOTION, label: Filter.MOTION }
];

interface Properties {
    width?: number;
}

interface Option {
    label: string;
    value: string;
}

const CatalogFilterSelect: React.FC<Properties> = ({ width }) => {
    const dispatch = useDispatch();
    const { filter } = useSelector(getCardsState);

    const selectWidth = width ? `${width}px` : '100%';
    const DropdownIndicator = (properties: DropdownIndicatorProps) => {
        return (
            components.DropdownIndicator && (
                <components.DropdownIndicator {...properties}>
                    <ArrowIcon />
                </components.DropdownIndicator>
            )
        );
    };

    const onChangeHandler = (option: Option) => {
        dispatch(setFilter(option.value));
    };

    const value = { label: filter, value: filter };

    return (
        <div className={styles.selectContainer} style={{ width: selectWidth }}>
            <Select
                instanceId="filter"
                className={styles.select}
                components={{ DropdownIndicator }}
                value={value}
                onChange={onChangeHandler}
                options={options}
            />
        </div>
    );
};

export default CatalogFilterSelect;
