"use client";

import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { ReactNode } from "react";
import Naviguation from "@/components/Naviguation"



export default function RootLayout({ children }: { children: ReactNode}) {
    return(
        <html lang="fr">
            <body>
                <ThemeProvider>
                    <Naviguation/>
                    <main>{children}</main>
                    <Footer/>
                </ThemeProvider>
            </body>
        </html>
    );
}