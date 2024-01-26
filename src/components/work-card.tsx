import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

type WorkCardProps = {
  title: string;
  company: string;
  link: string;
  time: string;
  description: string;
  stack: string[];
};

const WorkCard = ({
  company,
  description,
  link,
  time,
  title,
  stack
}: WorkCardProps) => {
  return (
    <div className='-space-y-1'>
      <div className='flex justify-between'>
        <h3 className='text-lg font-bold'>
          <a
            className='flex items-center gap-2 underline-offset-4 hover:underline'
            href={link}
            target='_blank'
            rel='noreferrer noopener'
          >
            {company}
            <ExternalLink className='size-4 text-muted-foreground print:hidden' />
          </a>
        </h3>
        <p className='text-nowrap text-xs text-muted-foreground'>{time}</p>
      </div>
      <p className='text-balance py-2 text-sm font-medium'>{title}</p>
      <p className='text-sm font-medium text-muted-foreground'>{description}</p>
      <div className='flex items-center space-x-2 pt-2'>
        <h4 className='text-xs font-semibold text-muted-foreground'>Stack:</h4>
        {stack.map((badge) => (
          <Badge className='cursor-pointer' key={badge} variant='secondary'>
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
