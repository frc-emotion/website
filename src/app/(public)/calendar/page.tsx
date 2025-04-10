import Calendar from "@/components/sections/calendar/Calendar";
import Image from "next/image";

export const metadata = {
  title: "Calendar | FRC Team 2658",
  description: "Team Σ-Motion' calendar events",
};

export default function CalendarPage() {
  return (
    <div>
      <div className="relative select-none h-clampLarge overflow-hidden bg-black">
        <Image
          src="https://cdn.team2658.org/web-public/trident.jpeg"
          alt="2023 Robot, Trident"
          fill={true}
          className="object-cover brightness-50 blur-sm absolute"
        />
        <h1 className="text-center py-8 text-5xl sm:text-r8xl font-bold absolute inset-0 text-teamYellow-100">
          Calendar
        </h1>
      </div>

      <div className="flex justify-center p-4 bg-teamYellow-500 rounded-xl my-[60px] mx-[20px]">
        <Calendar />
      </div>
    </div>
  );
}
