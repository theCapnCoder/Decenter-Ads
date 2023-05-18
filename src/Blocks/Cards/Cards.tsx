import React from "react";

import foodImg from "../../assets/img/food.jpg";
import pineappleImg from "../../assets/img/pineapple.jpg";
import drinkImg from "../../assets/img/drink.jpg";

import styles from "./cards.module.scss";
import Button from "../../components/Button";

type Card = {
  title: string;
  subTitle: string;
  span: string;
  text: string;
  img: string;
  alt: string;
  textButton: string;
};

const cardsSm: Array<Card> = [
  {
    title: "Personified Advertising: Engaging consumers in a cookieless world",
    subTitle: "When: ",
    span: "Tuesday, June 21st (3pm-3:30pm)",
    text: "Consumers have awakened to the value of their data and theneed to protect their privacy. Regulators’ righteous mission is accelerating, and the digital advertising ecosystem is undergoingits most significant transformation. The days of advertising relying on personal data are numbered. How do we provide a meaningful experience and leave a lasting impression on consumers, while future-proofing advertising?",
    img: foodImg,
    alt: "food",
    textButton: "JOIN US",
  },
  {
    title: "Personified Advertising: Engaging consumers in a cookieless world",
    subTitle: "When: ",
    span: "Tuesday, June 21st (3pm-3:30pm)",
    text: "Consumers have awakened to the value of their data and theneed to protect their privacy. Regulators’ righteous mission is accelerating, and the digital advertising ecosystem is undergoingits most significant transformation. The days of advertising relying on personal data are numbered. How do we provide a meaningful experience and leave a lasting impression on consumers, while future-proofing advertising?",
    img: pineappleImg,
    alt: "food",
    textButton: "JOIN US",
  },
  {
    title: "Personified Advertising: Engaging consumers in a cookieless world",
    subTitle: "When: ",
    span: "Tuesday, June 21st (3pm-3:30pm)",
    text: "Consumers have awakened to the value of their data and theneed to protect their privacy. Regulators’ righteous mission is accelerating, and the digital advertising ecosystem is undergoingits most significant transformation. The days of advertising relying on personal data are numbered. How do we provide a meaningful experience and leave a lasting impression on consumers, while future-proofing advertising?",
    img: drinkImg,
    alt: "food",
    textButton: "JOIN US",
  },
];

export const Cards = () => {
  return (
    <div className={styles.cards}>
      {cardsSm.map((card: Card, id) => (
        <div key={id} className={styles.card}>
          <div className={styles.image}>
            <img src={card.img} alt={card.alt} />
          </div>

          <div className={styles.content}>
            <h2>{card.title}</h2>
            <h3>
              {card.subTitle}
              <span>{card.span}</span>
            </h3>
            <p>{card.text}</p>
            <Button classNames={styles.smVisible} upper color="primary">
              Join Us
            </Button>
            <Button classNames={styles.lgVisible} upper color="primary">
              Book a session
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
