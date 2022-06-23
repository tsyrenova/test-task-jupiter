import styles from '@/components/load-more-button.module.scss';
import React from 'react';

interface Properties {
    onClick: () => void;
}

const LoadMoreButton: React.FC<Properties> = ({ onClick }) => {
    return (
        <div className={styles.catalogMore}>
            <button onClick={onClick} className={styles.catalogButton}>
                Load More
            </button>
        </div>
    );
};

export default LoadMoreButton;
