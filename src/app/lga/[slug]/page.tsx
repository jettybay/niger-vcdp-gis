import React from "react";
import { notFound } from "next/navigation";

export default function LgaPage({
  params,
}: {
  params: { slug?: string };
}) {
  const slug = params.slug;

  if (!slug) notFound();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">LGA: {slug}</h1>
      <p className="mt-2 text-zinc-600">LGA details page.</p>
    </div>
  );
}

