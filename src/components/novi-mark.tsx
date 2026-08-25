export default function NoviMark({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dims =
    size === "sm" ? "w-8 h-8 rounded-lg text-sm" : size === "lg" ? "w-14 h-14 rounded-2xl text-xl" : "w-10 h-10 rounded-xl text-base";
  return (
    <div
      className={`${dims} shrink-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white ${className}`}
      aria-hidden="true"
      style={{ fontFamily: "var(--font-display)" }}
    >
      N
    </div>
  );
}
