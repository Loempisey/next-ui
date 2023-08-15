"use client";

import React from "react";
import { title, subtitle } from "@/components/primitives";
import TabBar from "@/components/TabBar";
import Schedule from "@/components/AddSchedule/schedule";

export default function OverviewPage() {
  return (
    <div>
      <div className="flex justify-between"> 
        <h2 className="font-bold">Bookings</h2>
        <Schedule />
      </div>
        <TabBar />
    </div>
  );
}
