import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/Header";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

export const metadata = {
  title: "Eventora",
  description: "You take care of your business,we take care of your Events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-linear-to-br from-[#43C6AC] to-[#191654]">
        <ThemeProvider
          attribute="className"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              theme: shadesOfPurple ,
            }}
          >
            <ConvexClientProvider>
              {/* Header */}

              <Header />

              {/* Header Ends Here */}
              <main className="relative min-h-screen container mx-auto pt-40 md:pt-32">
                {/* Glow */}

                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A7FFF6]/40 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B388FF]/40 rounded-full blur-3xl" />
                </div>

                {/* Glow ends here */}

                <div className="relative z-10 min-h-[65vh]">{children}</div>

                {/* Footer */}

                <footer className="border-t border-gray-800/30 py-8 px-6 max-w-7xl mx-auto">
                  <div className="text-gray-700 text-sm">Eventora</div>
                </footer>

                {/* Footer Ends Here */}
              </main>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
