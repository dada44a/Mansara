import type { Route } from "./+types/Todos";
import { useLoaderData } from "react-router";

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  const todos: Todo[] = await response.json();
  return { todos };
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export function meta() {
  return [
    { title: "Your Tasks | Mansara" },
    { name: "description", content: "Organize your reading list and tasks." },
  ];
}

export default function Todos() {
  const { todos } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Tasks
          </h1>
          <p className="text-slate-500 uppercase tracking-widest text-xs font-semibold">
            Manage your daily reading and activities
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {todos.slice(0, 20).map((todo) => (
            <div
              key={todo.id}
              className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-slate-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className={`text-lg font-medium leading-tight ${todo.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                    {todo.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    ID: #{todo.id.toString().padStart(3, '0')}
                  </p>
                </div>
                
                <div className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  todo.completed 
                    ? 'bg-emerald-500 border-emerald-500 text-white' 
                    : 'bg-white border-slate-200 text-transparent group-hover:border-slate-300'
                }`}>
                  {todo.completed && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              
              <div className="mt-6 flex items-center gap-2">
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                  todo.completed 
                    ? 'bg-emerald-50 text-emerald-600' 
                    : 'bg-amber-50 text-amber-600'
                }`}>
                  {todo.completed ? 'Completed' : 'In Progress'}
                </span>
                <div className="flex-grow h-[1px] bg-slate-100" />
                <button className="text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-900 transition-colors">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {todos.length > 20 && (
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              Showing first 20 tasks out of {todos.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
