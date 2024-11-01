"use client";

import { CommandMenu } from "@/components/command-menu";
import ProjectCard from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WorkCard from "@/components/work-card";
import { usePrintContext } from "@/context/PrintContext";
import { CV_DATA } from "@/data/cv";
import { cn } from "@/lib/utils";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const { shouldPrintDetails } = usePrintContext();

  return (
    <>
      <section className='mx-auto w-full max-w-2xl'>
        <div className='flex items-center gap-8 bg-white'>
          <div className='space-y-2'>
            <h1 className='mb-2 text-2xl font-bold'>{CV_DATA.name}</h1>
            <p className='text-balance text-sm font-medium text-muted-foreground'>
              {CV_DATA.description}
            </p>
            <p className='mb-4 flex gap-2 font-medium text-muted-foreground'>
              <a
                href={CV_DATA.location.link}
                target='_blank'
                rel='noreferrer noopener'
                className='flex gap-2 text-xs hover:underline hover:underline-offset-4'
              >
                <MapPin className='size-4' />
                {CV_DATA.location.title}
              </a>
            </p>
            <div className='hidden text-xs font-medium text-muted-foreground print:flex'>
              {CV_DATA.contact.email && (
                <a
                  className='flex items-center gap-2'
                  href={`mailto:${CV_DATA.contact.email}`}
                >
                  <Mail className='size-4' />
                  {CV_DATA.contact.email}
                </a>
              )}
            </div>
            <div className='flex gap-2 pt-2 print:hidden'>
              {CV_DATA.contact.email && (
                <Button
                  className='size-8 text-sm text-muted-foreground'
                  variant='outline'
                  size='icon'
                  asChild
                >
                  <a href={`mailto:${CV_DATA.contact.email}`}>
                    <Mail className='size-4' />
                  </a>
                </Button>
              )}
              {CV_DATA.contact.social.map(({ name, url, icon: Icon }) => (
                <Button
                  key={name}
                  className='size-8 text-sm text-muted-foreground'
                  variant='outline'
                  size='icon'
                  asChild
                >
                  <a href={url} target='_blank' rel='noreferrer noopener'>
                    <Icon className='size-4' />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <Image
            className='size-28 rounded-xl'
            src={CV_DATA.photoLink}
            alt={CV_DATA.name}
            width={100}
            height={100}
          />
        </div>
      </section>
      <section className='mx-auto w-full max-w-2xl'>
        <div className='flex flex-col gap-2'>
          <h2 className='mb-2 text-2xl font-bold'>Summary</h2>
          <p
            className={cn(
              "hidden text-sm font-medium text-muted-foreground",
              shouldPrintDetails && "print:block"
            )}
          >
            {CV_DATA.summary.details.map((item, index) => (
              <span className='block' key={index}>
                - {item}
              </span>
            ))}
          </p>
          <p
            className={cn(
              "text-sm font-medium text-muted-foreground",
              shouldPrintDetails && "print:hidden"
            )}
          >
            {CV_DATA.summary.description}
          </p>
        </div>
      </section>
      <section className='mx-auto w-full max-w-2xl'>
        <div className='flex flex-col gap-2'>
          <h2 className='mb-2 text-2xl font-bold'>Work</h2>
          <div className='space-y-6 sm:space-y-4'>
            {CV_DATA.work.map(
              ({ title, company, link, time, description, stack, print }) => (
                <>
                  <WorkCard
                    company={company}
                    description={description}
                    key={title}
                    link={link}
                    time={time}
                    title={title}
                    stack={stack || []}
                    print={print}
                  />
                </>
              )
            )}
          </div>
        </div>
      </section>
      <section className='mx-auto w-full max-w-2xl'>
        <div className='flex flex-col gap-2'>
          <h2 className='mb-2 text-2xl font-bold'>Education</h2>
          <div className='space-y-4'>
            <div className='space-y-0'>
              <div className='flex justify-between gap-4'>
                <h3 className='text-md text-balance font-bold'>
                  {CV_DATA.education.title}
                </h3>
                <p className='text-nowrap text-xs text-muted-foreground'>
                  {CV_DATA.education.time}
                </p>
              </div>
              <p className='text-balance py-1 text-sm font-medium text-muted-foreground'>
                {CV_DATA.education.field}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='mx-auto w-full max-w-2xl'>
        <h2 className='mb-2 text-2xl font-bold'>Skills</h2>
        <div className='flex flex-wrap gap-2'>
          {CV_DATA.skills.map((skill) => (
            <Badge
              className='cursor-pointer hover:bg-foreground hover:text-white print:px-0 print:text-black'
              key={skill}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>
      <section className='mx-auto w-full max-w-2xl'>
        <h2 className='mb-2 text-2xl font-bold'>Tools</h2>
        <div className='flex flex-wrap gap-2'>
          {CV_DATA.tools.map((tool) => (
            <Badge
              className='cursor-pointer hover:bg-foreground hover:text-white print:px-0 print:text-black'
              key={tool}
            >
              {tool}
            </Badge>
          ))}
        </div>
      </section>
      <section className='mx-auto w-full max-w-2xl'>
        <h2 className='mb-2 text-2xl font-bold'>Projects</h2>
        <div className='space-y-6'>
          {CV_DATA.projects.map(({ badges, description, link, title }) => (
            <ProjectCard
              badges={badges}
              description={description}
              key={title}
              link={link}
              title={title}
            />
          ))}
        </div>
      </section>
      <CommandMenu links={CV_DATA.contact.social} />
    </>
  );
}
