import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TabsContent, Tabs } from "@/components/ui/tabs";

export default function Component() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="flex flex-col items-center lg:items-start p-6 lg:p-10">
        <Avatar className="h-24 w-24 lg:h-32 lg:w-32">
          <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold mt-4">John Doe</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Software Developer</p>
      </div>
      <div className="flex flex-col lg:items-end lg:flex-row gap-4 p-6 lg:p-10">
        <Button className="w-full lg:w-auto" variant="outline">
          Edit Profile
        </Button>
        <Button className="w-full lg:w-auto" variant="default">
          Message
        </Button>
      </div>
      <Tabs className="mt-6">
        <div className="flex justify-around border-b-2">
          <div className="pb-4 font-semibold">User Info</div>
          <div className="pb-4 font-semibold">List of Questions</div>
        </div>
        <TabsContent>
          <div>
            <div className="p-6 lg:p-10">
              <h2 className="text-xl font-bold mb-4">User Information</h2>
              <p>Email: johndoe@example.com</p>
              <p>Location: New York, USA</p>
              <p>Joined: January 2023</p>
            </div>
          </div>
          <div>
            <div className="p-6 lg:p-10">
              <h2 className="text-xl font-bold mb-4">List of Questions</h2>
              <p>Question 1</p>
              <p>Question 2</p>
              <p>Question 3</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
