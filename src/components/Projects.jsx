import React, { useState, useEffect } from 'react';
import { 
  FolderGit2, 
  Factory, 
  GraduationCap, 
  Users, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ChevronRight, 
  ShieldAlert 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { content } = useLanguage();
  const { projects } = content;
  
  const [selectedCategory, setSelectedCategory] = useState(projects.categories[0]);
  const [activeModalProject, setActiveModalProject] = useState(null);

  useEffect(() => {
    setSelectedCategory(projects.categories[0]);
  }, [projects.categories]);

  const filteredProjects = selectedCategory === projects.categories[0]
    ? projects.items 
    : projects.items.filter(p => p.category === selectedCategory);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Factory':
        return <Factory className="w-6 h-6 text-blue-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-purple-600" />;
      default:
        return <FolderGit2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 mb-3.5">
              <FolderGit2 className="w-4 h-4" />
              <span>{projects.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              {projects.title}
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {projects.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {projects.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-7 sm:p-9 enterprise-card-border enterprise-card-hover flex flex-col justify-between text-left group"
            >
              <div>
                {/* Card Top: Icon, Category & Period */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shadow-2xs group-hover:bg-blue-50/70 transition-colors">
                      {getIcon(project.icon)}
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider block">
                        {project.category}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-400 font-medium">
                        {project.company} • {project.period}
                      </span>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200/70">
                    {project.client}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {project.title}
                </h3>
                
                <div className="mt-2 text-sm sm:text-base font-semibold text-slate-700 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  <span>{project.role}</span>
                </div>

                {/* Description */}
                <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                  {project.shortDesc}
                </p>

                {/* Key Metric Highlights / Achievements */}
                <div className="mt-6 space-y-2.5">
                  <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider block">
                    {project.highlights.length > 0 && "Highlights"}
                  </span>
                  <ul className="space-y-2.5">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-800 font-semibold">{h.title}:</strong> {h.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Area: Tech Stack & Deep Dive CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs sm:text-sm font-medium bg-slate-50 text-slate-700 border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1.5">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-800 group/btn"
                  >
                    <span>{projects.deepDiveBtn}</span>
                    <ChevronRight className="w-4.5 h-4.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {project.deliveryTag ? (
                    <span className="text-xs sm:text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full hidden sm:inline">
                      {project.deliveryTag}
                    </span>
                  ) : null}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
