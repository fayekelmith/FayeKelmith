"use client";
import EssayCard from "./EssayCard";
import axios from "axios";
import { useState, useEffect } from "react";

interface Essay {
  id: string;
  title: string;
  content: string;
  description: string;
  imgUrl: string;
  author: string[];
  createdAt: string;
}

const EssayCardsHolder = () => {
  const [essays, setEssays] = useState<Essay[]>([]);
  useEffect(() => {
    getEssays().then((data) => {
      if (data.allEssays) setEssays(data.allEssays);
    });
  }, []);
  return (
    <section className="min-w-full my-4">
      <div className="grid grid-cols-3 gap-x-8">
        {essays.map((essay: Essay) => {
          return (
            <EssayCard
              key={essay.id}
              title={essay.title}
              description={essay.description}
              imgurl="/images/work.svg"
              id={essay.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default EssayCardsHolder;

const getEssays = async () => {
  try {
    const res = await axios.get("/api/essays");
    return res.data;
  } catch (error) {
    console.log("Error fetching essays", error);
    return { error: "Error fetching essays" };
  }
};
