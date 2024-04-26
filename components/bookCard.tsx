import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BookCardProps {
  title: string;
  author: string;
  price: number;
}
export default function BookCard({
  title,
  author,
  price,
}: Readonly<BookCardProps>) {
  return (
    <Card className="hover:shadow-xl shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{author}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{title}</div>
        <p className="text-xs text-muted-foreground">${price}</p>
      </CardContent>
    </Card>
  );
}
