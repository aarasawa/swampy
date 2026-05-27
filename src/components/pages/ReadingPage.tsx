import React from "react";
import { motion } from "motion/react";
import Bookshelf from "../Bookshelf";
import styles from "../../App.module.scss";

const SectionHeader = ({ label, title, id }: { label: string; title: string; id?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={styles['section__header']}
  >
    <div className={styles['section__label']}>
      // {label}
    </div>
    <h2 className={styles['section__title']} id={id}>
      {title}
    </h2>
  </motion.div>
);

interface Book {
  title: string;
  author: string;
  width: number;
  height: number;
  color: [string, string];
  deco: string;
  rating: number;
  year: string;
  genre: string;
  status: string;
  review: string;
}

const ReadingPage: React.FC<{ books: Book[] }> = ({ books }) => {
  const manga = books.filter(b => b.genre === 'Manga');
  const fiction = books.filter(b => b.genre === 'Fiction');
  const nonfiction = books.filter(b => b.genre === 'Nonfiction');

  return (
    <section id="reading" className={styles['section']} aria-labelledby="reading-heading" role="region">
      <SectionHeader label="Library" title="BOOKSHELF" id="reading-heading" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <Bookshelf category="Manga" books={manga} />
        <Bookshelf category="Fiction" books={fiction} />
        <Bookshelf category="Nonfiction" books={nonfiction} />
      </div>
    </section>
  );
};

export default ReadingPage;
