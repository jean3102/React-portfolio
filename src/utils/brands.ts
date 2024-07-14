export const techList = [
    { tech: "html", color: "#e34c26" },
    { tech: "css", color: "#264de4" },
    { tech: "javascript", color: "#f7df1e" },
    { tech: "typescript", color: "#3178c6" },
    { tech: "react.js", color: "#61dafb" },
    { tech: "next.js", color: "#ffffff" },
    { tech: "node.js", color: "#339933" },
    { tech: "vite", color: "#2c3e50" },
    { tech: "svelte", color: "#ff3e00" },
    { tech: "sveltekit", color: "#ff3e00" },
    { tech: "sass", color: "#9b59b6" },
    { tech: "tailwind-css", color: "#38b2ac" },
    { tech: "mui", color: "#00897b" },
    { tech: "git", color: "#f1e05a" },
    { tech: "express.js", color: "#ffffff" },
    { tech: "python", color: "#3776ab" },
    { tech: "fastapi", color: "#009688" }
]

export const getColorByTech = (tech: string): string => {
  const techItem = techList.find(item => item.tech === tech);
  return techItem ? techItem.color : "#ffffff";
}
