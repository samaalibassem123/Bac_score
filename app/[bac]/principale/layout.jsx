"use client";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({ children, params }) {
  const Title = `Score de Bac ${params.bac}`;
  return (
    <main className="h-fit select-none">
      <Header title={Title} />
      {children}
    </main>
  );
}
