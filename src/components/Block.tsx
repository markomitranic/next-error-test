export default function Block({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-3 rounded-sm border border-dashed border-gray-200 bg-gray-50 p-4">
      {children}
    </div>
  );
}
