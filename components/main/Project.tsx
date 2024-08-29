import React, { useEffect } from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

function Project() {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20  ">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        
        
        <ProjectCard src="/LiveDocs.png" title="Live Collaboration App" description="Live collaborative App using Next.js, Tailwind CSS, Shadcn-UI, LiveBlocks"  />
        
      
        <ProjectCard src="/Fight-Game.png" title="Pokemon FIght game" description="Arcade game based on pokemon characters using React, Tailwind CSS, Nes CSS for fonts" />
      </div>
    </div>
  );
}

export default Project;
