export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <div>
      <section>{children}</section>
    </div>
  );
}
