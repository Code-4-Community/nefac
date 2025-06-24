import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EmailForm() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row gap-2 mb-2">
        <div className="w-full">
          <Input id="fname" placeholder="First Name" className="bg-gray-100"/>
        </div>
        <div className="w-full">
          <Input id="lname" placeholder="Last Name" className="bg-gray-100"/>
        </div>
      </div>
      <div className="w-full">
        <Input id="email" placeholder="Email" className="bg-gray-100"/>
      </div>
      <Button className="bg-[#1560F1] text-white mt-2">SIGN UP</Button>
    </div>
  );
}