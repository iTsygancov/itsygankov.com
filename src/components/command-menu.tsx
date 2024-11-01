"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "@/components/ui/command";
import { usePrintContext } from "@/context/PrintContext";
import {
  CreditCard,
  File,
  FileText,
  LucideIcon,
  Settings,
  User
} from "lucide-react";
import * as React from "react";

interface CommandMenuProps {
  links: (
    | {
        name: string;
        url: string;
        icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
      }
    | {
        name: string;
        url: string;
        icon: LucideIcon;
      }
  )[];
}

export function CommandMenu({ links }: CommandMenuProps) {
  const [open, setOpen] = React.useState(false);
  const { setShouldPrintDetails } = usePrintContext();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handlePrint = (value: boolean) => {
    setOpen(false);
    setShouldPrintDetails(value);
    setTimeout(() => window.print(), 250);
  };

  return (
    <div className='fixed inset-x-0 bottom-0 m-0 w-full cursor-pointer border-t border-t-slate-100 bg-white p-0 text-center print:hidden'>
      <p
        className='p-1 text-sm text-muted-foreground hover:bg-slate-50'
        onClick={() => setOpen(true)}
      >
        Press{" "}
        <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
          <span className='text-xs'>⌘</span>K
        </kbd>{" "}
        to open the command menu
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Actions'>
            <CommandItem
              className='cursor-pointer'
              onSelect={() => handlePrint(false)}
            >
              <File className='size-4 text-muted-foreground' />
              <span>Print Basic CV</span>
            </CommandItem>
            <CommandItem
              className='cursor-pointer'
              onSelect={() => handlePrint(true)}
            >
              <FileText className='size-4 text-muted-foreground' />
              <span>Print Full CV</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading='Links'>
            {links.map(({ url, name, icon: Icon }) => (
              <CommandItem
                className='cursor-pointer'
                key={url}
                onSelect={() => window.open(url)}
              >
                <a
                  className='flex items-center gap-2'
                  href={url}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <Icon className='size-4 text-muted-foreground' />
                  <span>{name}</span>
                </a>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
