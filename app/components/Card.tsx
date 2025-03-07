import {
  Card as CardUI,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

type CardProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
};

export function Card({ children, title, description, footer }: CardProps) {
  return (
    <CardUI>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardUI>
  );
}
