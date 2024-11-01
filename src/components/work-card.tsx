import { Badge } from "@/components/ui/badge";
import { usePrintContext } from "@/context/PrintContext";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

type WorkCardProps = {
  title: string;
  company: string;
  link: string;
  time: string;
  description: string;
  stack: string[];
  print: {
    responsibilities: {
      title: string;
      content: string[];
    };
    achievements?: {
      title: string;
      content: string[];
    };
  };
};

const WorkCard = ({
  company,
  description,
  link,
  time,
  title,
  stack,
  print
}: WorkCardProps) => {
  const { shouldPrintDetails } = usePrintContext();

  return (
    <div className='-space-y-1'>
      <div className='flex items-center justify-between'>
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
      <p className='text-balance py-2 text-sm font-medium print:font-bold'>
        {title}
      </p>

      <p
        className={cn(
          "text-sm font-medium text-muted-foreground",
          shouldPrintDetails && "print:hidden"
        )}
      >
        {description}
      </p>

      <div
        className={cn("hidden space-y-4", shouldPrintDetails && "print:block")}
      >
        <p className='hidden text-sm font-medium text-muted-foreground print:block'>
          <span className='print:font-semibold'>
            {print.responsibilities.title}
          </span>
          {print.responsibilities.content.map((item, index) => (
            <span className='block' key={index}>
              - {item}
            </span>
          ))}
        </p>
        <p className='hidden text-sm font-medium text-muted-foreground print:block'>
          <span className='print:font-semibold'>
            {print.achievements?.title}
          </span>
          {print.achievements?.content?.map((item, index) => (
            <span className='block' key={index}>
              - {item}
            </span>
          ))}
        </p>
      </div>

      <div className='flex items-start space-x-2 pt-2 md:items-center print:items-center'>
        <h4 className='text-xs font-semibold text-muted-foreground print:font-bold print:text-black'>
          Stack:
        </h4>
        <div className='flex flex-wrap gap-2'>
          {stack.map((badge) => (
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
    </div>
  );
};

export default WorkCard;
