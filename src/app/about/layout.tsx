export default function AboutLayout({
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
