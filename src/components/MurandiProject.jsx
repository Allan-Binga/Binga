import ProjectCard from "./ProjectCard.jsx";

export default function MurandiProject() {
  return (
    <ProjectCard
      title="Murandi Apartments"
      category="Full-stack Application"
      description="A full-stack web application built with React, Node.js, Express, and PostgreSQL."
      repository="https://github.com/Allan-Binga/Murandi"
      stack={["React", "Node.js", "Express", "PostgreSQL", "Nginx", "PM2"]}
    >
<p className="p-4 text-body-md text-muted-gray">Built with React, Node.js, Express, and PostgreSQL, with Nginx and PM2 in the deployment stack.</p>
    </ProjectCard>
  );
}
