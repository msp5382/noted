import { Sidebar } from "../sidebar/sidebar";

interface EditorLayoutProps {
  children: React.ReactNode;
}

export const EditorLayout = ({ children }: EditorLayoutProps) => {
  return (
    <div className="relative flex min-h-screen w-screen">
      <Sidebar />
      <main className="bg-foreground flex flex-1 flex-col items-center p-4">
        {children}
      </main>
    </div>
  );
};
