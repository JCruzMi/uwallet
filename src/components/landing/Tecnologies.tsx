"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsData = [
  {
    id: 1,
    name: "Nextjs 14",
    description:
      "A framework for React that enables server-side rendering and effortless deployment.",
    image: "/images/nextjs.webp",
  },
  {
    id: 2,
    name: "TypeScript",
    description:
      "A typed superset of JavaScript that enhances code maintainability and scalability.",
    image: "/images/typescript.webp",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for building custom designs with ease.",
    image: "/images/tailwind.webp",
  },
  {
    id: 4,
    name: "Shadcn UI",
    description: "Beautifully designed components by Shadcn.",
    image: "/images/shadcn.webp",
  },
  {
    id: 6,
    name: "MagicUI",
    description: "Beautifully designed components by Magic UI.",
    image: "/images/magicui.webp",
  },
  {
    id: 7,
    name: "PostgreSQL Vercel",
    description:
      "A free and open-source relational database management system.",
    image: "/images/postgresql.webp",
  },
  {
    id: 9,
    name: "Next Auth",
    description:
      "Authentication and authorization solution for Next.js applications.",
    image: "/images/nextauth.webp",
  },
];

const Tecnologies = () => {
  return (
    <div
      id="tecnologies"
      className="scroll-mt-20 flex flex-col justify-center items-center w-full mx-auto max-w-7xl px-6 lg:px-8 cursor-default"
    >
      <div className="flex flex-col mb-[3rem]">
        <h1 className="scroll-m-20 text-3xl sm:text-xl md:text-3xl font-semibold tracking-tight lg:text-4xl text-center max-w-[700px]">
          Built with the best
        </h1>
        <p className="mx-auto max-w-[500px]  md:text-lg text-center mt-2 ">
          Your customers deserve a product built with the best technologies
        </p>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left border p-6 rounded-md dark:bg-black"
            >
              <div>
                {project.image && (
                  <Image
                    src={project.image}
                    width={40}
                    height={30}
                    className="mb-3 rounded"
                    alt={project.name}
                  />
                )}
                <div className="mb-1 text-sm font-medium ">{project.name}</div>
                <div className="max-w-[250px] text-sm font-normal text-gray-500">
                  {project.description}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Tecnologies;
