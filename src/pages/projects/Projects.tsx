import React from "react"
import { useNavigate } from "react-router-dom"
import projects from "./data.json"
import Button from "../../components/Button"
import { BaseLayout } from "../../components"

export const Projects = () => {
  const navigate = useNavigate()

  const handleMore = (slug: string) => {
    navigate(`/projects/${slug}`)
  }

  return (
    <BaseLayout>    
    <section className="max-w-7xl mx-auto my-8 px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-surface rounded-lg shadow-md p-6 flex flex-col"
        >
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg mb-4 object-cover h-48 w-full"
          />
          <h3 className="font-heading text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted mb-4">{project.description.substring(0, 100)}...</p>
          <div className="mt-auto">
            <Button onClick={() => handleMore(project.slug)}>More</Button>
          </div>
        </div>
      ))}
    </section>
    </BaseLayout>
  )
}

