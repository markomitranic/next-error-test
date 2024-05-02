export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="border border-gray-200 bg-gray-100 px-2 py-1 text-xs">
      {children}
    </code>
  );
}
