import React, { useState } from "react";
import HeroSection from "../Components/HeroSection";
import CanceledOrders from "../Components/CanceledOrders";
import AllOrders from "../Components/AllOrders";
import InProgress from "../Components/InProgress";
import CompletedOrders from "../Components/CompletedOrders";

export default function History() {
  const [activeTab, setActiveTab] = useState("all");

  const renderContent = () => {
    switch (activeTab) {
      case "in progress":
        return <InProgress />;

      case "completed":
        return <CompletedOrders />;

      case "canceled":
        return <CanceledOrders />;

      default:
        return <AllOrders />;
    }
  };

  return (
    <>
      <HeroSection height={120} />

      <div className="w-full min-h-screen bg-[#f5f5f5] py-10">
        <div className="container mx-auto max-w-4xl space-y-6">
          {/* Tabs */}
          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-1.5 rounded-lg text-sm ${
                activeTab === "all"
                  ? "bg-[#D9176C] text-white"
                  : "border text-[#ACACAC]"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setActiveTab("in progress")}
              className={`px-4 py-1.5 rounded-lg text-sm ${
                activeTab === "in progress"
                  ? "bg-[#D9176C] text-white"
                  : "border text-[#ACACAC]"
              }`}
            >
              In Progress
            </button>

            <button
              onClick={() => setActiveTab("completed")}
              className={`px-4 py-1.5 rounded-lg text-sm ${
                activeTab === "completed"
                  ? "bg-[#D9176C] text-white"
                  : "border text-[#ACACAC]"
              }`}
            >
              Completed
            </button>

            <button
              onClick={() => setActiveTab("canceled")}
              className={`px-4 py-1.5 rounded-lg text-sm ${
                activeTab === "canceled"
                  ? "bg-[#D9176C] text-white"
                  : "border text-[#ACACAC]"
              }`}
            >
              Canceled
            </button>
          </div>

          {/* Content */}
          <div className="mt-6">{renderContent()}</div>
        </div>
      </div>
    </>
  );
}
