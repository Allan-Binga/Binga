import ProjectCard from "./ProjectCard.jsx";

export default function PublicationProject() {
  return (
    <ProjectCard
      title="Publication Site"
      category="Full-stack Publication Platform"
      description="A publication website for sharing written content, with a React interface and a Node.js backend backed by PostgreSQL."
      repository="https://github.com/Allan-Binga/Publication-Site"
      stack={["React", "Node.js", "Express", "PostgreSQL"]}
      site="https://skirill.org"
    >
<p className="p-4 text-body-md text-muted-gray">React interfaces connect to a Node.js and Express backend with PostgreSQL for data storage.</p>
    </ProjectCard>
  );
}
