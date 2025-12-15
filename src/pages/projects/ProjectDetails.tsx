import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import projects from "./data.json"
import Button from "../../components/Button"
import { BaseLayout } from "../../components"

export const ProjectDetails = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = projects.find((p) => p.slug === slug)

  if (!project) return <div>Project not found</div>

  return (
    <BaseLayout>
    <div className="max-w-4xl mx-auto px-6 my-8 py-10">
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-6">
        &larr; Back
      </Button>

      <h1 className="text-4xl font-heading font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg mb-6 object-cover w-full h-80"
      />
      <p className="text-muted mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 bg-primary/20 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          className="text-primary hover:underline"
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          className="text-primary hover:underline"
        >
          Code
        </a>
      </div>
    </div>
    </BaseLayout>
  )
}

