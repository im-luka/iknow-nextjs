import { useState } from "react";
import styles from "./faq.module.scss";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const Faq = () => {
  return (
    <section className={styles.faq}>
      <h1>Frequently asked questions</h1>
      <div className={styles.faq__questions}>
        <FaqItem
          title="What is iWATCH?"
          info="iWATCH is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices."
          additional="You can watch as much as you want, whenever you want without a
                single commercial – all for one low monthly price. There's
                always something new to discover and new TV shows and movies are
                added every week!"
        />
        <FaqItem
          title="How much does iWATCH cost?"
          info="Watch iWATCH on your smartphone, tablet, Smart TV, laptop, or streaming device, 
                  all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. 
                  No extra costs, no contracts."
        />
        <FaqItem
          title="Where can I watch?"
          info="Watch anywhere, anytime. Sign in with your iWATCH account to watch instantly on the 
                  web at iwatch.com from your personal computer or on any internet-connected device that 
                  offers the iWATCH app, including smart TVs, smartphones, tablets, streaming media players 
                  and game consoles."
          additional="You can also download your favorite shows with the iOS, Android, or Windows 10 app. 
                  Use downloads to watch while you're on the go and without an internet connection. Take iWATCH 
                  with you anywhere."
        />
        <FaqItem
          title="How do I cancel?"
          info="iWATCH is flexible. There are no pesky contracts and no commitments. You can easily cancel 
                  your account online in two clicks. There are no cancellation fees – start or stop your account 
                  anytime."
        />
        <FaqItem
          title="What can I watch on iWATCH?"
          info="iWATCH has an extensive library of feature films, documentaries, TV shows, anime, award-winning 
                  iWATCH originals, and more. Watch as much as you want, anytime you want."
        />
        <FaqItem
          title="Is iWATCH good for kids?"
          info="The iWATCH Kids experience is included in your membership to give parents control while kids enjoy 
                  family-friendly TV shows and movies in their own space."
          additional="Kids profiles come with PIN-protected parental controls that let you restrict the maturity 
                  rating of content kids can watch and block specific titles you don’t want kids to see."
        />
      </div>
    </section>
  );
};

const FaqItem = ({ title, info, additional }) => {
  const [isSubQuestionOpen, setIsSubQuestionOpen] = useState(false);

  const subQuestHandler = () => {
    setIsSubQuestionOpen((prevstate) => !prevstate);
  };

  return (
    <div className={styles.faq__questions__item} onClick={subQuestHandler}>
      <div className={styles.faq__questions__item__main}>
        <h3>{title}</h3>
        {isSubQuestionOpen ? (
          <AiOutlineClose fontSize="1.5rem" />
        ) : (
          <AiOutlinePlus fontSize="1.5rem" />
        )}
      </div>

      {isSubQuestionOpen && (
        <div className={styles.faq__questions__item__sub}>
          <p>{info}</p>
          <p>{additional}</p>
        </div>
      )}
    </div>
  );
};

export default Faq;
