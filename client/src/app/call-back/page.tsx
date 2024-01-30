"use server";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { createUser, getUserById } from "@/app/api/users/users.action";

export default async function Page() {
  // Get the User object when you need access to the user's information
  const user = await currentUser();

  // console.log(user?.externalAccounts[0].emailAddress);
  const createProfile = async () => {
    if (user) {
      const new_user = {
        clerkId: user?.id,
        username: user.username,
        email: user?.externalAccounts[0].emailAddress,
        firstName: user?.firstName,
        lastName: user?.lastName,
        photo: user?.imageUrl,
      };

      try {
        await createUser(new_user, user.id);
      } catch (error) {
        console.log(error);
      } finally {
        redirect("/");
      }
    }
  };

  await createProfile();
}
