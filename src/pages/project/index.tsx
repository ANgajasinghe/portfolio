import ProjectCard from "@ui/components/project-card";

export default function Project(props: any) {
  return (
    <div className="m-4">
      <div className="row">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
}
