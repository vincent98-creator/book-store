import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type Locale } from "@/lib/locales";
import { getMessages, getTranslations } from "next-intl/server";
import "./globals.css";
import Menu from "@/components/menu";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}>) {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Menu />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return {
    title: "metadata.title",
    description: "metadata.description",

    openGraph: {
      type: "website",
      url: "https://domain.com",
      title: "Book Store App",
      description:
        "A book store app created using Nextjs with view and add book features",
      images: [
        {
          url: "https://localhost:3000/next.svg",
          alt: "Book Store App",
          width: 800,
          height: 600,
        },
      ],
    },
  };
}
