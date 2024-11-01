import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  badges: string[];
  description: string;
  link: string;
  title: string;
};

const ProjectCard = ({
  badges,
  description,
  link,
  title
}: ProjectCardProps) => {
  return (
    <div className='space-y-2'>
      <h3 className='text-md text-balance font-bold'>
        <a
          className='flex items-center gap-2 underline-offset-4 hover:underline'
          href={link}
          target='_blank'
          rel='noreferrer noopener'
        >
          {title}
          <ExternalLink className='size-4 text-muted-foreground print:hidden' />
        </a>
        <a
          className='hidden text-sm font-medium underline underline-offset-4 print:block print:text-muted-foreground'
          href={link}
        >
          {link}
        </a>
      </h3>
      <p className='text-sm font-medium text-muted-foreground'>{description}</p>
      <div className='flex flex-wrap gap-2'>
        {badges.map((badge) => (
          <Badge
            className='cursor-pointer print:h-auto print:p-0'
            key={badge}
            variant='secondary'
          >
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
