import { useActions } from '@/hooks/useActions';
import { Link } from '@/UI/Link/Link'
import classNames from 'classnames';
import { FC } from 'react'
import styles from './Rating.module.scss'

interface RatingProps {
    rating: number;
    className?: string;
}

export const Rating: FC<RatingProps> = ({className, rating}) => {

    const {showGradeModal} = useActions()

    const handleShowModal = () => showGradeModal(true)

    return (
        <div className={classNames(styles.item, className)}>
            <span className={styles.rating}>{rating}</span>
            <div className={styles.text}>
                <span className={styles.caption}>Рейтинг ZabarTV</span>
                <Link onClick={handleShowModal} as='button' className={styles.btn} size='sm'>Оценить</Link>
            </div>
        </div>
    )
}