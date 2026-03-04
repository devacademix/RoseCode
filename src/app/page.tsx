"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {
  const projects = useQuery(api.project.get);
  const createProject = useMutation(api.project.create);
  const [projectName, setProjectName] = useState("");

  const handleCreateProject = async () => {
    const name = projectName.trim();
    if (!name) return;

    await createProject({ name });
    setProjectName("");
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <Button onClick={handleCreateProject} disabled={!projectName.trim()}>
          Add New
        </Button>
      </div>

      {projects?.map((project) => (
        <div className="border rounded p-2 flex flex-col" key={project._id}>
          <p>{project.name}</p>
          <p>ownerID: {project.ownerId}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
