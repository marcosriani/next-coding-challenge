'use client';

import Card from './components/card/card';
import { useState } from 'react';
import styles from './page.module.css';
import { listData } from '@/mocked-data/list-data';
import ItemCount from './components/item-count/item-count';

export default function Home() {
  const [items, setItems] = useState<{ productId: string; quantity: number }[]>(
    []
  );

  const [showBasket, setShowBasket] = useState(false);

  const addToCart = (productId: string) => {
    setItems((prevState) => {
      const alreadyInCart = prevState.find(
        (item) => item.productId === productId
      );

      if (alreadyInCart) {
        return prevState.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevState, { productId: productId, quantity: 1 }];
    });
  };

  const showBasketHandler = () => setShowBasket((prevState) => !prevState);

  const basketItems = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

  return (
    <div className={styles.container}>
      <header className={styles.description}>
        <h1>Michael&apos;s Amazing Web Store</h1>
        <div>
          <button onClick={showBasketHandler} className={styles.basket}>
            Basket: {basketItems}
            {` item${basketItems !== 1 ? 's' : ''}`}
          </button>

          {showBasket && (
            <ul>
              {listData.map((listDataItem) => (
                <ItemCount
                  key={listDataItem.id}
                  title={listDataItem.title}
                  count={
                    items.find((item) => item.productId === listDataItem.id)
                      ?.quantity || 0
                  }
                />
              ))}
            </ul>
          )}
        </div>
      </header>

      <main className={styles.main}>
        <ul className={styles.grid}>
          {listData.map((item) => (
            <Card key={item.id} content={item} addToCart={addToCart} />
          ))}
        </ul>
      </main>
    </div>
  );
}
