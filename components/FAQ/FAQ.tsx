import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";
import FAQItem from "./FAQItem";

interface Question {
  question: string;
  answer: string;
}

const FAQ = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-6xl mx-auto p-4">
      <div className="flex-1 flex flex-col justify-end items-start w-full lg:w-[30rem] aspect-square relative p-8 rounded-xl overflow-hidden">
        <ul className="flex flex-col gap-4">
          <li className="bg-white p-[2px] px-2 flex items-center gap-2 font-semibold text-neutral-600 text-lg rounded-lg">
            <p className="text-primary">
              <FaCheck />
            </p>
            Lorem, ipsum.
          </li>
          <li className="bg-white p-[2px] px-2 flex items-center gap-2 font-semibold text-neutral-600 text-lg rounded-lg">
            <p className="text-primary">
              <FaCheck />
            </p>
            Lorem, ipsum.
          </li>
          <li className="bg-white p-[2px] px-2 flex items-center gap-2 font-semibold text-neutral-600 text-lg rounded-lg">
            <p className="text-primary">
              <FaCheck />
            </p>
            Lorem, ipsum.
          </li>
        </ul>
        <Image
          width={800}
          height={800}
          src="/img/sunset.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
      </div>

      <div className="px-4 py-12 flex-1">
        <h6 className="mb-4 text-5xl font-bold">Frequently asked questions</h6>
        <p className="text-xl font-neutral-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus eveniet porro neque commodi quia tempore asperiores, ut
          ipsa excepturi earum.
        </p>
        {data.map((question: Question, index: number) => (
          <FAQItem title={question.question}>
            <p>{question.answer}</p>
          </FAQItem>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

const data = [
  {
    question:
      "Jakie są maksymalne wymiary i waga ładunku, który możecie przewieźć przy użyciu HDS?",
    answer:
      "Nasze pojazdy HDS mogą przewozić ładunki o maksymalnej wadze do [wagi] ton i wymiarach do [wymiary]. Skontaktuj się z nami, aby omówić szczegółowe wymagania dotyczące Twojego ładunku.",
  },
  {
    question:
      "Czy realizujecie zlecenia transportowe HDS poza Katowicami i Śląskiem?",
    answer:
      "Tak, chociaż nasza główna działalność koncentruje się na Katowicach i Śląsku, możemy realizować zlecenia transportowe HDS również w innych regionach Polski. Skontaktuj się z nami, aby uzyskać więcej informacji.",
  },
  {
    question:
      "Jak daleko od pojazdu może znajdować się obiekt, który ma być obsłużony przez zwyżkę lub HDS?",
    answer:
      "Zasięg naszych dźwigów HDS wynosi do [odległość] metrów. Skontaktuj się z nami, aby uzyskać więcej informacji na temat specyficznych wymagań Twojego zlecenia.",
  },
];
