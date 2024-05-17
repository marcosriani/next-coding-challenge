import { ItemCountProps } from '@/types/item-count';
import styles from './item-count.module.css';

const ItemCount = ({ title, count }: ItemCountProps) => {
  return (
    <li className={styles['item-count']}>
      {title} count: {count}
    </li>
  );
};

export default ItemCount;
