"use client";

import { LuckyWheelPage } from "@/app/pages/lucky/lucky-wheel-page";
import { LuckyGridPage } from "@/app/pages/lucky/lucky-grid-page";
import dynamic from "next/dynamic";
const StrategyArmoryButton = dynamic(async () => (await import("./components/StrategyArmory")).StrategyArmory)
const TenTimesRaffleButton = dynamic(async () => (await import("./components/TenTimesRaffle")).TenTimesRaffle)

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* 头部文案 */}
      <header className="text-3xl font-bold text-center text-gray-800 my-8">
        大营销平台 - 抽奖展示
      </header>

      {/* 装配抽奖 */}
      <StrategyArmoryButton />

      {/* 中间的两个div元素 */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
          <LuckyWheelPage />
        </div>
        <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
          <LuckyGridPage />
        </div>
      </div>

      <TenTimesRaffleButton />

      {/* 底部文案 */}
      <footer className="text-gray-600 text-center my-8">
        本项目为 星球「码农会锁」第8个实战项目 https://gaga.plus @小傅哥
      </footer>
    </div>
  );
}
