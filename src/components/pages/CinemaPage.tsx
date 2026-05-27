import React from "react";
import { motion } from "motion/react";
import FilmArchive from "../FilmArchive";
import styles from "../../styles/CinemaPage.module.scss";
import appStyles from "../../App.module.scss";

const SectionHeader = ({ label, title, id }: { label: string; title: string; id?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={appStyles['section__header']}
  >
    <div className={appStyles['section__label']}>
      // {label}
    </div>
    <h2 className={appStyles['section__title']} id={id}>
      {title}
    </h2>
  </motion.div>
);

interface Film {
  title: string;
  director: string;
  year: number;
  rating?: number;
  status: string;
  genre?: string;
  color?: string;
  review?: string;
}

const CinemaPage: React.FC<{ films: Film[] }> = ({ films }) => {
  const filmList = films.filter((f: Film) => f.status === 'Films');
  const shows = films.filter((f: Film) => f.status === 'Shows');

  return (
    <section id="cinema" className={styles['section']} aria-labelledby="cinema-heading" role="region">
      <SectionHeader 
        label="Archives" 
        title="Media Archives" 
        id="cinema-heading" 
      />
      
      <div className={styles['layout']}>
        <FilmArchive category="Films" films={filmList} />
        <FilmArchive category="Shows" films={shows} />
      </div>
    </section>
  );
};

export default CinemaPage;
