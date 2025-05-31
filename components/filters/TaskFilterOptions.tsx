import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTodoStore } from "../../store/taskListStore";
import { TASK_PRIORITIES, TASK_STATUSES } from "../../mock";
import { Input } from "@/components/ui/input";

export function TaskFilterOptions() {
  const { filters, setFilter, resetFilters } = useTodoStore();

  return (
    <div className="flex gap-4 mb-4 items-center">
      <Input
        className="w-44 bg-green-50 text-green-900 placeholder-green-700 border border-green-400 focus:border-green-400 focus:ring-green-300 shadow-sm"
        placeholder="Search..."
        value={filters.search}
        onChange={(e) => setFilter("search", e.target.value)}
      />
      <Select value={filters.priority} onValueChange={(value) => setFilter("priority", value)}>
        <SelectTrigger className="w-[180px] bg-green-50 text-green-900 border border-green-400 focus:ring-green-300 focus:border-green-400 shadow-sm">
          <SelectValue placeholder="All Priorities" />
        </SelectTrigger>
        <SelectContent className="bg-green-50 text-green-900 border border-green-400 shadow-md">
          <SelectItem value="all">All Priorities</SelectItem>
          {TASK_PRIORITIES.map((priority) => (
            <SelectItem key={priority.value} value={priority.value}>
              {priority.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={filters.status} onValueChange={(value) => setFilter("status", value)}>
        <SelectTrigger className="w-[180px] bg-green-50 text-green-900 border border-green-400 focus:ring-green-300 focus:border-green-400 shadow-sm">
          <SelectValue placeholder="All Statuses" />
        </SelectTrigger>
        <SelectContent className="bg-green-50 text-green-900 border border-green-400 shadow-md">
          <SelectItem value="all">All Statuses</SelectItem>
          {TASK_STATUSES.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              {status.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div onClick={resetFilters} className="text-green-800 font-medium hover:underline cursor-pointer">
        reset filters
      </div>
    </div>
  );
}
