import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import React from "react";

const ProjectCard = () => {
  return (
    <Card>
      <CardContent>
        <CardDescription>Short Description of project</CardDescription>
      </CardContent>
      <CardFooter className="gap-x-4">
        <Button className="w-full">GitHub</Button>
        <Button className="w-full bg-jade">Live</Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
