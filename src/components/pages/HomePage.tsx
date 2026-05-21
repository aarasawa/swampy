import React from "react";
import { motion } from "motion/react";
import styles from "../../styles/NowPage.module.scss";
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

interface NowEntry {
  prompt: string;
  lines: (string | { text: string; linkTo?: string; href?: string })[];
}

const NOW_SECTIONS: NowEntry[] = [
  {
    prompt: "currently_building",
    lines: [
      {
        text: "AgriGuard — pesticide application predictor",
        linkTo: "/projects",
      },
      "Built the base application with map visualization and added pesticide markers for the year of 2023. Looking to add more years, thinking of ways to improve the visualization to handle larger time ranges.",
      {
        text: "aarasawa.dev — personal site + Amber Echo blog consolidation",
        linkTo: "/projects",
      },
      "Migrating from Next.js to Astro. Merging the personal site and blog into one codebase on one domain. Currently mid-build.",
      "Deep Phosphor Studios — business site finalized and deployed.",
    ],
  },
  {
    prompt: "currently_learning",
    lines: [
      "DeepLearning.AI Machine Learning Specialization (Coursera)",
      "Reviewing neural networks with softmax outputs — multiclass classification and how the softmax layer assigns probabilities across output classes. Working through this alongside full-time work.",
      "HackTheBox modules are slow but going through day by day.",
    ],
  },
  {
    prompt: "currently_reading",
    lines: [
      "Behave — Robert Sapolsky",
      "Biology of human behavior — hormones, evolution, neuroscience, and why people do what they do. Dense. Trying my hardest to read through it.",
      { text: "Promethea — Alan Moore", linkTo: "/reading" },
      "Still bit stuck on this. Want to finish Behave before proceeding.",
    ],
  },
  {
    prompt: "currently_watching",
    lines: [
      { text: "BlackBerry", href: "https://www.imdb.com/title/tt21867434/" },
      "Interesting to watch the story. Seeing the innovation and subsequent collapse due to stubbornness and difference in design philosophy.",
    ],
  },
  {
    prompt: "career_and_focus",
    lines: [
      "Heads down on hobbies, skill-building and the business right now. Not actively job hunting anymore — focused on making the work speak for itself.",
      "Deep Phosphor Studios targeting nonprofit and small business clients in the LA area. Building out the portfolio and documentation to support that.",
      "Based in Arcadia, CA — San Gabriel Valley / LA Metro. Open to remote or local work.",
    ],
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <section id="hero" className={appStyles['hero']}>
        <div className={appStyles['hero__grid-accent']} />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={appStyles['hero__badge-container']}>
            <span className={appStyles['hero__badge']}>Engineer</span>
            <span className={appStyles['hero__badge-sep']}>/</span>
            <span>Hobby Enjoyer</span>
          </div>
          <h1 className={appStyles['hero__title']}>ALEXANDER<br/>ARASAWA</h1>
          <div className={appStyles['hero__sub']}>
            <span className={appStyles['hero__sub-indicator']}>$</span> Software Engineer & IT Specialist
          </div>
          <p className={appStyles['hero__desc']}>
            Specializing in <span className={appStyles['hero__desc-highlight']}>applications development, IT infrastructure</span> and <span className={appStyles['hero__desc-highlight']}>geospatial applications</span>. Operating under Deep Phosphor Studios.
          </p>
        </motion.div>
      </section>

      <section id="about" className={appStyles['section']} aria-labelledby="about-heading" role="region">
        <SectionHeader label="History" title="SYSTEM INFO" id="about-heading" />
        <div className={appStyles['info']}>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={appStyles['info__body']}
          >
            <p>
              Applications support specialist currently optimizing system workflows at <strong className={appStyles['info__highlight']}>BHS</strong>. My background bridges direct user support with robust engineering solutions.
            </p>
            <p>
              As tech lead for <strong className={appStyles['info__highlight']}>Koyasan Beikoku Betsuin</strong>, I've modernized membership systems and document pipelines for one of Little Tokyo's most historic institutions.
            </p>
            <p>
              Focused on <strong className={appStyles['info__highlight']}>iterative delivery</strong>. I believe in thin, working slices of software that provide value immediately rather than protracted development cycles.
            </p>
          </motion.div>
          <div className={appStyles['info__stats']}>
            {[
              { label: 'Primary Focus', val: 'Full-Stack & ML Engineering' },
              { label: 'Agency', val: 'Deep Phosphor Studios' },
              { label: 'Location', val: 'Los Angeles, CA' },
              { label: 'Salesforce', val: 'Innovator 2025 · 81 Badges' },
            ].map(stat => (
              <motion.div 
                key={stat.label}
                whileHover={{ x: 5 }}
                className={appStyles['info__stat-card']}
              >
                <div className={appStyles['info__stat-label']}>{stat.label}</div>
                <div className={appStyles['info__stat-value']}>{stat.val}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={styles["now__timestamp"]}
        >
          <span className={styles["now__timestamp-prompt"]}>$</span>
          <span className={styles["now__timestamp-cmd"]}>last_updated</span>
          <span className={styles["now__timestamp-val"]}>May 2026</span>
        </motion.div>

        <div className={styles["now__sections"]}>
          {NOW_SECTIONS.map((section, i) => (
            <motion.div
              key={section.prompt}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={styles["now__shell"]}
            >
              <div className={styles["now__shell-bar"]}>
                <div className={styles["now__shell-dots"]}>
                  <span /><span /><span />
                </div>
                <span className={styles["now__shell-title"]}>{section.prompt}.txt</span>
              </div>
              <div className={styles["now__shell-body"]}>
                <div className={styles["now__shell-cmd-row"]}>
                  <span className={styles["now__prompt"]}>$</span>
                  <span className={styles["now__cmd"]}>cat {section.prompt}.txt</span>
                </div>
                <div className={styles["now__lines"]}>
                  {section.lines.map((line, j) => {
                    if (typeof line === "string") {
                      return (
                        <p key={j} className={styles["now__line"]}>
                          {line}
                        </p>
                      );
                    }
                    if (line.linkTo) {
                      return (
                        <p key={j} className={styles["now__line"]}>
                          <span className={styles["now__entry-marker"]}>▸</span>
                          <a href={line.linkTo} className={styles["now__link"]}>
                            {line.text}
                          </a>
                        </p>
                      );
                    }
                    if (line.href) {
                      return (
                        <p key={j} className={styles["now__line"]}>
                          <span className={styles["now__entry-marker"]}>▸</span>
                          <a
                            href={line.href}
                            target="_blank"
                            rel="noreferrer"
                            className={styles["now__link"]}
                          >
                            {line.text}
                          </a>
                        </p>
                      );
                    }
                    return (
                      <p key={j} className={styles["now__line"]}>
                        {line.text}
                      </p>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    </>
  );
};

export default HomePage;
