"use client";

import { ExperienceItem } from "@/content/experience";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, FlaskConical } from "lucide-react";

const IconMap = {
  work: Briefcase,
  education: GraduationCap,
  research: FlaskConical,
};

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Journey & Experience</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full" />
      </div>

      <div className="relative border-l border-neutral-800 ml-4 md:ml-6 space-y-12 pb-8">
        {items.map((item, index) => {
          const Icon = IconMap[item.type];
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Icon size={14} className="text-blue-400" />
              </div>

              {/* Content Card */}
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-blue-400 tracking-wider">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {item.title}
                </h3>
                <h4 className="text-md font-medium text-neutral-400 mb-3">
                  {item.organization}
                </h4>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}