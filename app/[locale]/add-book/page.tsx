"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
/**
 * Book Form component for adding a new book.
 *
 * @param {Object} props - Component props.
 * @param {Function} props.t - Translation function from `next-intl`.
 * @returns {JSX.Element} - JSX element representing the ProfileForm component.
 */
export default function BookForm() {
  const t = useTranslations("addBook");
  // ...

  const formSchema = z.object({
    title: z.string().min(2, {
      message: "Title must be a least 2 characters.",
    }),
    author: z.string().min(2, {
      message: "Author must be a least 2 characters.",
    }),
    price: z
      .string()
      .min(0, { message: "Price must be have 2 decimal places" }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      price: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Card className="w-full max-w-sm mx-auto mt-7">
      <CardHeader>
        <CardTitle className="text-2xl">{t("AddBook")}</CardTitle>
        <CardDescription>{t("EnterDetails")}</CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("BookTitle")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("BookTitlePlaceholder")} {...field} />
                  </FormControl>
                  <FormDescription>{t("TitleDescription")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("BookAuthor")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("BookAuthorPlaceholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>{t("AuthorDescription")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("BookPrice")}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={t("BookPricePlaceholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>{t("PriceDescription")}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">{t("Submit")}</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
