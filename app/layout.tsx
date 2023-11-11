"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Cookies from "js-cookie";

const inter = Inter({ subsets: ["latin"] });
import { Header } from "./components/header/header";
import { SideMenu } from "./components/side-menu/sideMenu";
import { useEffect, useState } from "react";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
