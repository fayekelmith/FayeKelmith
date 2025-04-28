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
export const essays: EssayProp[] = [
  {
    id: uuidv4(),
    title: "Talking To Someone in Pain",
    url: "essays/pain",
    description:
      "In this essay, I am thinking about how I could effectively communicate with someone who is in pain.",
    date: new Date("2024-12-03"),
    image: "/images/someone_in_pain.jpg",
    isComplete: true,
  },
  {
    id: uuidv4(),
    title: "Autonomy -- The art of saying NO",
    url: "https://medium.com/@fayekelmith/autonomy-the-art-of-saying-no-b793a29a57a0",
    description:
      "This essay I think about the meaning of the prayer of serenity and how it relates to autonomy. To exercise the wisdoem of choice.",
    date: new Date("2024-12-03"),
    image: "/images/no.jpg",
    isComplete: true,
  },
  {
    id: uuidv4(),
    title: "Nerves > Nitro",
    url: "https://medium.com/@fayekelmith/nerves-47f561ef3f8d",
    description:
      "Navigating the fine line between nerves and nitro can be nerve wrecking. In this essay, my experience highlights how I needed to say no or when I needed to say 'F*** it!'.",
    date: new Date("2024-12-03"),
    image: "/images/tigre.jpg",
    isComplete: true,
  },
  {
    id: uuidv4(),
    title: "Bald Decisions",
    url: "https://medium.com/@fayekelmith/bald-decisions-f269b4e7336e",
    description: "I got a buzz cut. And wrote about it! ",
    date: new Date("2024-12-03"),
    image: "/images/bald_combo.png",
    isComplete: true,
  },
];
