import React, { useEffect, useState } from "react";

const getTargetDate = () => {
  const now = new Date();
  const year =
    now.getMonth() > 6 || (now.getMonth() === 6 && now.getDate() > 15)
      ? now.getFullYear() + 1
      : now.getFullYear();
  return new Date(year, 6, 15, 0, 0, 0, 0);
};

function getTimeLeft(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function JuanpiqPage() {
  const [targetDate] = useState(getTargetDate());
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className="h-full flex flex-col items-center justify-center bg-neutral-900 text-white overflow-hidden"
      style={{ minHeight: "calc(100vh - 180px)" }}
    >
      <h1 className="text-5xl font-extrabold mb-10 text-center text-yellow-400 drop-shadow-lg">
        vuelve juampiq
      </h1>
      <div className="flex gap-6 text-center text-4xl font-mono">
        <div>
          <div>{timeLeft.days}</div>
          <div className="text-base font-normal">días</div>
        </div>
        <span>:</span>
        <div>
          <div>{String(timeLeft.hours).padStart(2, "0")}</div>
          <div className="text-base font-normal">horas</div>
        </div>
        <span>:</span>
        <div>
          <div>{String(timeLeft.minutes).padStart(2, "0")}</div>
          <div className="text-base font-normal">min</div>
        </div>
        <span>:</span>
        <div>
          <div>{String(timeLeft.seconds).padStart(2, "0")}</div>
          <div className="text-base font-normal">seg</div>
        </div>
      </div>
      <p className="mt-8 text-neutral-400">Cuenta regresiva al 15 de julio</p>
    </div>
  );
}