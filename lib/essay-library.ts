import { v4 as uuidv4 } from "uuid";
interface EssayProp {
  id: string;
  title: string;
  url: string;
  description: string;
  date: Date;
  image?: string;
  isComplete: boolean | false;
}

//TODO: Integrate this with components and use frontmatter to display essays
const essays: EssayProp[] = [
  {
    id: uuidv4(),
    title: "Talking To Someone in Pain",
    url: "essays/pain",
    description:
      "In this essay, I am thinking about how I could effectively communicate with someone who is in pain.",
    date: new Date("2024-12-03"),
    image: "https://images.unsplash.com/photo-1635860863256-0f4f2e8e7b2b",
    isComplete: false,
  },
];
