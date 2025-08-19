import BlurFade from "@/components/magicui/blur-fade";
import { MorphingText } from "@/components/magicui/morphing-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { AnimatedSpan, Terminal, TypingAnimation as TypingAnimationTerminal } from "@/components/magicui/terminal";
import { TextAnimate } from "@/components/magicui/text-animate";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import DateTimeNow from "@/modules/date-time";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-4 -mb-12">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <TextAnimate animation="slideLeft" by="character" className="text-2xl font-bold tracking-tighter sm:text-2xl xl:text-2xl/none mb-3">
                {`${DATA.name.split(" ")[0]}`}
              </TextAnimate>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <MorphingText texts={DATA.description} className="text-2xl font-bold tracking-tighter text-left sm:text-2xl 2xl:text-2xl/none mb-3" />
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-20 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <DateTimeNow intervalMs={60_000} />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <TypingAnimation startOnView={true} duration={10} className="text-sm text-muted-foreground dark:prose-invert mt-4">
            {DATA.summary}
          </TypingAnimation>
        </BlurFade>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <TextAnimate animation="slideLeft" by="character" className="text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none mb-3">
              Tech Stack
            </TextAnimate>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill: any, id: any) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <ShinyButton>
                  <div className="flex items-center gap-1">
                    <skill.icon className="size-5" />
                    <TypingAnimation startOnView={true} duration={150} className="text-sm text-muted-foreground dark:prose-invert">
                      {skill.name}
                    </TypingAnimation>
                  </div>
                </ShinyButton>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="journey">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <TextAnimate animation="slideLeft" by="character" className="text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none mb-3">
              Journey
            </TextAnimate>
          </BlurFade>
          {DATA.journey.map((jrny: any, id: any) => (
            <BlurFade
              key={id}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                id={id}
                key={jrny.id}
                href={jrny.href}
                logoUrl={jrny.logoUrl}
                altText={jrny.school}
                title={jrny.school}
                subtitle={jrny.degree}
                badge={jrny.badge}
                period={!jrny.end ? `${jrny.start}` : `${jrny.start} - ${jrny.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <TextAnimate animation="slideLeft" by="character" className="text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none -mb-4">
              Projects
            </TextAnimate>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project: any, id: any) => {
              if (project.active) {
                return (
                  <BlurFade
                    key={id}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  >
                    <ProjectCard
                      href={project.href}
                      key={id}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </BlurFade>
                )
              }
            })}
          </div>
        </div>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <Terminal className="mb-14">
            <TypingAnimationTerminal className="px-2">&gt; lets connect with me</TypingAnimationTerminal>

            <AnimatedSpan className="text-green-500 px-4">
              <span>✔ Whatsapp +44 74 5588 9391</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-pink-500 px-4">
              <span>✔ Instagram @becaneee_</span>
            </AnimatedSpan>

            <AnimatedSpan className="text-gray-500 px-4">
              <span>✔ Threads @becaneee_</span>
            </AnimatedSpan>

            <TypingAnimationTerminal className="text-muted-foreground px-2">
              feel free to ask for crafting new platforms
            </TypingAnimationTerminal>
          </Terminal>

        </BlurFade>
      </section>
    </main>
  );
}