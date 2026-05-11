export default function PortfolioHomepage() {
  const projects = [
    {
      title: 'PMII UNPAM Platform',
      category: 'Organizational Digital Platform',
      description:
        'Developed and deployed a centralized digital platform to improve organizational communication, information distribution, and accessibility for members using modern cloud technologies.',
      stack: ['Next.js', 'Supabase', 'Netlify', 'TailwindCSS'],
      impact:
        'Improved digital accessibility and organizational communication efficiency through scalable cloud deployment and responsive system architecture.',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      link: 'https://pmiiunpam.com',
    },
    {
      title: 'Employee Management REST API',
      category: 'Operational Backend System',
      description:
        'Built a secure REST API system for employee attendance and payroll management with optimized query handling and authentication workflows.',
      stack: ['Node.js', 'Express.js', 'MySQL', 'JWT'],
      impact:
        'Enhanced operational efficiency and maintainability through structured backend architecture and scalable API design.',
      image:
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop',
      link: '#',
    },
    {
      title: 'Inventory Forecasting System',
      category: 'Business Decision Support Platform',
      description:
        'Designed a forecasting-based inventory system to support operational decision-making, stock prediction, and business reporting workflows.',
      stack: ['Next.js', 'Supabase', 'Forecasting Logic'],
      impact:
        'Improved inventory planning visibility and operational insight through centralized forecasting workflows.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      link: '#',
    },
  ]

  const expertise = [
    'Web System Development',
    'REST API Architecture',
    'Cloud Deployment',
    'Business Requirement Understanding',
    'System Workflow Analysis',
    'Frontend & Backend Integration',
    'Database Design',
    'Organizational Digital Solutions',
  ]

  const technologies = [
    'AWS Certified',
    'Next.js',
    'Supabase',
    'Netlify',
    'REST API',
    'System Design',
    'Business Workflow',
  ]

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-violet-500/30">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold tracking-wide">
              Akhsya Ubaidika
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#certifications" className="hover:text-white transition-colors">
              Certifications
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-32 pb-20 min-h-[90vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg text-sm text-zinc-300">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </div>

            <div className="space-y-6">
              <p className="uppercase tracking-[0.3em] text-sm text-violet-300">
                Early-stage Technology & Business Solution Professional
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
                Web Developer &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                  System Solution Builder
                </span>
              </h1>

              <p className="text-zinc-400 text-lg leading-8 max-w-2xl">
                I build scalable digital solutions for organizations and
                operational systems using modern web technologies, cloud
                platforms, and business-oriented problem solving.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-7 py-4 rounded-2xl bg-white text-black font-medium hover:scale-[1.02] transition-all duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-6 text-zinc-400 text-sm">
              <a href="https://github.com" className="hover:text-white">
                GitHub
              </a>
              <a href="https://linkedin.com" className="hover:text-white">
                LinkedIn
              </a>
              <a href="https://akhsya.cloud" className="hover:text-white">
                Portfolio
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -top-10 right-10 w-72 h-72 bg-violet-500/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

            <div className="relative w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl shadow-black/50">
              <div className="rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="https://fdrpzuulgsjcdscsyzgu.supabase.co/storage/v1/object/sign/img/profile.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNWExMTFhMy01ODJlLTQ0MzYtYTdiMC0xMzhhM2U3NzAzY2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWcvcHJvZmlsZS53ZWJwIiwiaWF0IjoxNzc4NDk1MDI0LCJleHAiOjE4MTAwMzEwMjR9.gCtiIBXmPnDwxFYCOIGLlN24NdEqqN0gLKh-T0z_0a8"
                  alt="profile"
                  className="w-full h-[480px] object-cover"
                />
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-xl">Akhsya Ubaidika</h3>
                    <p className="text-zinc-400 text-sm">
                      System & Web Solution Builder
                    </p>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm">
                    AWS Certified
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-zinc-500 text-sm">Focus</p>
                    <h4 className="mt-2 font-medium">
                      Business-Oriented Systems
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-zinc-500 text-sm">Stack</p>
                    <h4 className="mt-2 font-medium">Next.js & Cloud</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-center text-sm text-zinc-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="max-w-7xl mx-auto px-6 lg:px-10 py-28"
      >
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <p className="text-violet-300 uppercase tracking-[0.25em] text-sm mb-6">
              About
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Building Systems That Solve Real Problems
            </h2>
          </div>

          <div className="space-y-8 text-zinc-400 text-lg leading-9">
            <p>
              I focus on building practical and scalable digital systems that
              help organizations improve communication, information management,
              and operational workflows.
            </p>

            <p>
              My approach combines technical implementation with business
              understanding to create solutions that are functional, efficient,
              and impactful in real operational environments.
            </p>

            <p>
              Through leadership experience and hands-on development projects, I
              continue to develop a strong foundation in technology, system
              thinking, and business-oriented problem solving. Humanity calls it
              “digital transformation.” Most of the time it is just people
              finally realizing spreadsheets cannot solve every life problem.
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 lg:px-10 py-28"
      >
        <div className="space-y-6 mb-16">
          <p className="text-violet-300 uppercase tracking-[0.25em] text-sm">
            Featured Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold max-w-4xl leading-tight">
            Real Systems Built For Organizations & Operational Workflows
          </h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="grid lg:grid-cols-2 gap-10 items-center rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-10"
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                    {project.category}
                  </p>

                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-lg leading-8">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-4">
                    Technology Stack
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <div
                        key={item}
                        className="px-4 py-2 rounded-xl border border-white/10 bg-black/20 text-sm text-zinc-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <p className="text-zinc-500 text-sm mb-2">Impact</p>
                  <p className="text-zinc-300 leading-7">{project.impact}</p>
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-3 text-white hover:text-violet-300 transition-colors"
                >
                  Visit Project
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="max-w-7xl mx-auto px-6 lg:px-10 py-28"
      >
        <div className="space-y-6 mb-16">
          <p className="text-violet-300 uppercase tracking-[0.25em] text-sm">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Leadership & Organizational Experience
          </h2>
        </div>

        <div className="space-y-8 border-l border-white/10 ml-3 pl-10">
          {[
            {
              title: 'Head of UPZ UNPAM 2023',
              description:
                'Coordinated organizational operations, communication workflows, and social contribution activities.',
            },
            {
              title: 'Chairman of Student Council - Vocational High School',
              description:
                'Managed student coordination, internal communication, and activity planning across divisions.',
            },
            {
              title: 'Chairman of Student Council - Junior High School',
              description:
                'Developed foundational leadership, coordination, and organizational management skills.',
            },
            {
              title: 'PMII Organizational Experience',
              description:
                'Participated in communication, organizational development, and collaborative operational activities.',
            },
          ].map((item) => (
            <div key={item.title} className="relative">
              <div className="absolute -left-[53px] top-2 w-5 h-5 rounded-full bg-violet-500 border-4 border-[#050505]" />

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-8 text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="certifications"
        className="max-w-7xl mx-auto px-6 lg:px-10 py-28"
      >
        <div className="space-y-6 mb-16">
          <p className="text-violet-300 uppercase tracking-[0.25em] text-sm">
            Certifications
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Cloud & Backend Technology Foundation
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10">
            <div className="space-y-6">
              <div className="inline-flex px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm">
                AWS Certified
              </div>

              <h3 className="text-3xl font-bold">
                AWS Cloud Data Analytics
              </h3>

              <p className="text-zinc-400 text-lg leading-8">
                Learned cloud architecture fundamentals, data analytics
                workflows, scalable infrastructure concepts, and modern cloud
                deployment practices using AWS services.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10">
            <div className="space-y-6">
              <div className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
                Backend Development
              </div>

              <h3 className="text-3xl font-bold">
                Express.js Web Back-End Development
              </h3>

              <p className="text-zinc-400 text-lg leading-8">
                Developed backend systems using Express.js, REST API
                architecture, authentication workflows, and database
                integration for scalable application development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <div className="space-y-6 mb-16">
          <p className="text-violet-300 uppercase tracking-[0.25em] text-sm">
            Core Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold max-w-4xl leading-tight">
            Technology, Systems, and Business-Oriented Problem Solving
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-white/10 mb-6" />

              <h3 className="text-lg font-medium leading-8">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-28 text-center">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-2xl p-10 lg:p-16">
          <p className="text-violet-300 uppercase tracking-[0.25em] text-sm mb-6">
            Philosophy
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
            Technology With Purpose
          </h2>

          <p className="text-zinc-400 text-xl leading-10 max-w-3xl mx-auto">
            Technology should not only look modern, but also solve operational
            problems, improve communication, and create measurable impact for
            organizations and businesses.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 lg:px-10 py-28"
      >
        <div className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 lg:p-16 flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-between"
        >
          <div className="max-w-2xl space-y-6">
            <p className="text-violet-300 uppercase tracking-[0.25em] text-sm">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let’s Build Meaningful Digital Solutions
            </h2>

            <p className="text-zinc-400 text-lg leading-8">
              Open for collaboration, professional opportunities, and projects
              focused on technology, operational systems, and business-oriented
              digital solutions.
            </p>
          </div>

          <div className="space-y-5 text-lg">
            <a
              href="mailto:akhsya.ubaidika@gmail.com"
              className="block text-zinc-300 hover:text-white transition-colors"
            >
              akhsya.ubaidika@gmail.com
            </a>

            <a
              href="https://github.com"
              className="block text-zinc-300 hover:text-white transition-colors"
            >
              github.com/akhsyaUbaidika
            </a>

            <a
              href="https://linkedin.com"
              className="block text-zinc-300 hover:text-white transition-colors"
            >
              linkedin.com/in/akhsya
            </a>

            <a
              href="https://akhsya.cloud"
              className="block text-zinc-300 hover:text-white transition-colors"
            >
              akhsya.cloud
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
