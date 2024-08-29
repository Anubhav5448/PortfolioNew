import React from "react";
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
        
        <Link href="https://live-docs-pied.vercel.app/">
        <ProjectCard src="/LiveDocs.png" title="Bank App" description="Banking App using Next.js 14, Tailwind CSS, Zod" />
        </Link>
      
        <ProjectCard src="/Evently.png" title="Event App" description="Event App using Next.js 14,TypeScript, Tailwind CSS, Zod, Stripe" />
      </div>
    </div>
  );
}

export default Project;
