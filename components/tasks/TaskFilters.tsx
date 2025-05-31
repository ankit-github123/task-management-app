import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import React from "react";
import { TaskFilterOptions } from "../filters/TaskFilterOptions";

const TaskFilters = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="">
          <div className="flex items-center gap-2">
            Task Filters <div className="w-5 border-b-[1.5px] border-black relative top-[1px]"></div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <TaskFilterOptions />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default TaskFilters;
