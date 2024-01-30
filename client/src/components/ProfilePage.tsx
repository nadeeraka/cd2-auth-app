"use client";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { parseURLParams } from "@/utils/main";
import { useEffect, useState } from "react";
import { getUserData } from "@/app/api/users/users.action";
import { object } from "yup";

export default function Component() {
  const [state, setstate] = useState("");

  // getUser data from API
  const getUserDataFromAPI = async (id: string) => {
    try {
      const result = await getUserData(id);
      if (result) {
        setstate(result);
      }
    } catch (error) {}
  };

  const router = useRouter();
  // window.location.reload();

  useEffect(() => {
    const params = parseURLParams(window.location.search);
    if (params) {
      getUserDataFromAPI(Object.keys(params)[0]);
    }
  }, []);

  return (
    <main className="bg-[#0000] min-h-screen p-10">
      <Card className="w-full max-w-2xl mx-auto bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader>
          <CardTitle>User Profile </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="flex items-center space-x-5">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="font-semibold text-xl">Change Profile Picture</div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter your username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link className="ml-auto text-sm underline text-white" href="#">
                Change Password
              </Link>
            </div>
            <Input
              id="password"
              placeholder="Enter your password"
              type="password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto bg-blue-500 text-white">
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
