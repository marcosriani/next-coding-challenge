import { CardProps } from '@/types/card';
import styles from './card.module.css';

const Card = ({ content, addToCart }: CardProps) => (
  <li className={styles.card}>
    <button
      className={styles.card__button}
      onClick={() => addToCart(content.id)}
      aria-label="Add to basket"
    >
      <span className={styles['card__button-title']}>
        {content.title}{' '}
        <span className={styles['card__button-title-icon']}>-&gt;</span>
      </span>
      <span className={styles['card__button-description']}>
        {content.description}
      </span>
    </button>
  </li>
);

export default Card;
