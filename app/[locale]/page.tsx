import BookCard from "@/components/bookCard";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("books");
  const BOOKS = [
    { id: 1, title: t("The Book"), author: t("John Doe"), price: 350 },
    { id: 2, title: t("Another Book"), author: t("Jane Smith"), price: 400 },
    {
      id: 3,
      title: t("Awesome Book"),
      author: t("Michael Johnson"),
      price: 250,
    },
    { id: 4, title: t("Great Book"), author: t("Emily Davis"), price: 300 },
    { id: 5, title: t("Fantastic Book"), author: t("David Lee"), price: 450 },
    {
      id: 6,
      title: t("Incredible Book"),
      author: t("Sophia Brown"),
      price: 200,
    },
    {
      id: 7,
      title: t("Amazing Book"),
      author: t("Robert Williams"),
      price: 350,
    },
    { id: 8, title: t("Wonderful Book"), author: t("Laura Green"), price: 425 },
    { id: 9, title: t("Superb Book"), author: t("Kevin Lee"), price: 275 },
    { id: 10, title: t("Excellent Book"), author: t("Amy Chen"), price: 325 },
  ];
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 min-h-screen  items-center  p-24 gap-6 ">
      {BOOKS?.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          price={book.price}
        />
      ))}
    </main>
  );
}
