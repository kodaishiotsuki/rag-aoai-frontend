"use client";

import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* <SideMenu /> */}
      <main className="bg-slate-50 flex-1 overflow-auto">{children}</main>
    </div>
  );
}
