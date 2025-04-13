import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EmailForm() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row gap-2">
        <div className="w-full">
          <Label htmlFor="fname">First Name</Label>
          <Input id="fname" placeholder="First Name"/>
        </div>
        <div className="w-full">
          <Label htmlFor="lname">Last Name</Label>
          <Input id="lname" placeholder="Last Name"/>
        </div>
      </div>
      <div className="w-full">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Email" />
      </div>
      <Button className="bg-[#1560F1] text-white mt-2">SIGN UP</Button>
    </div>
  );
}

