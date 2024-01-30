import { BellIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ShieldCloseIcon } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

const user = true;

const Links = [
  {
    title: "Sign in",
    link: "/sign-n",
    auth: false,
  },
  {
    title: "Create account",
    description: "/create-account",
    auth: false,
  },
  {
    title: "Profile",
    description: "/profile",
    auth: true,
  },
];
const gestList = () => Links.filter((res: any) => res.auth == false);
// useMemo(() => gestList(), []);
type CardProps = React.ComponentProps<typeof Card>;

export default function MobileMenu({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-center">Menu</CardTitle>
        <div className="border-b-2 border-slate-100  w-full m-auto"></div>
        {/* <CardDescription>You have 3 unread messages.</CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        {user &&
          Links.filter((res: any) => res.auth == true).map((res: any) => (
            <>
              <div className="flex justify-center items-center">
                <Button size={"lg"} variant={"link"}>
                  <Link href={`${res.link}`}>{res.title}</Link>
                </Button>
              </div>
              <div className="border-b-2 border-slate-100  w-full m-auto"></div>
            </>
          ))}
        {!user &&
          Links.filter((res: any) => res.auth == false).map((res: any) => (
            <>
              <div className="flex justify-center items-center">
                <Button size={"lg"} variant={"link"}>
                  <Link href={`${res.link}`}>{res.title}</Link>
                </Button>
              </div>
              <div className="border-b-2 border-slate-100  w-full m-auto"></div>
            </>
          ))}
      </CardContent>
      <CardFooter>
        {user && (
          <Button className="w-full">
            <ShieldCloseIcon className="mr-2 h-4 w-4" /> Log out
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
