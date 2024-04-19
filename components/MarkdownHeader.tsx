import {
  Bold,
  Italic,
  Underline,
  Heading1,
  Strikethrough,
  Code,
  Settings
} from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

const MarkdownHeaeder = ({
  feedElement,
}: {
  feedElement: (syntax: string) => void;
}) => {
  const btns = [
    { name: <Bold className="h-4 w-4" />, syntax: "****", value: "bold" },
    {
      name: <Italic className="h-4 w-4" />,
      syntax: "**",
      value: "italic",
    },
    {
      name: <Underline className="h-4 w-4" />,
      syntax: "<u></u>",
      value: "underline",
    },
    {
      name: <Strikethrough className="h-4 w-4" />,
      syntax: "~~",
      value: "strikethrough",
    },
    { name: <Heading1 className="h-4 w-4" />, syntax: "# ", value: "heading1" },
    { name: <Code className="h-4 w-4" />, syntax: "```\n```", value: "code" },
    { name: <Settings className="h-4 w-4" />, syntax: "# <u> </u>", value: "settings"}
  ];
  return (
    <ToggleGroup variant="outline" type="multiple">
      {btns.map((btn) => {
        return (
          <ToggleGroupItem
            value={btn.value}
            key={btn.syntax}
            aria-label={`Toggle ${btn.value}`}
            onClick={() => feedElement(btn.syntax)}
          >
            {btn.name}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
};

export default MarkdownHeaeder;
