import { Frontend_skill, Skill_data } from "@/constants";
import { Inder } from "next/font/google";
import React from "react";
import SkillsDataProvider from "../sub/SkillsDataProvider";
import SkillText from "../sub/SkillText";

function Skills() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      id="skills"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText/>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className=" w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover  ">
          <video
            src="/cards-video.webm"
            className="w-full h-auto"
            preload="flase"
            playsInline
            loop
            muted
            autoPlay
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
