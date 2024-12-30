import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Zap, Shield, Database, Palette, Github } from "lucide-react";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-50 dark:bg-gray-900 border-b">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl text-gray-900 dark:text-white">
            Remix⚡ShadCN⚡Supabase
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to="#features"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Features
          </Link>
          <Link
            to="#get-started"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Get Started
          </Link>
          <Button variant="outline" size="icon" className="text-gray-600 hover:text-gray-900">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
              Remix + ShadCN UI + Supabase
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Kickstart your next project with this powerful starter template.
              Combining the best of Remix, ShadCN UI, and Supabase for rapid,
              type-safe development.
            </p>
            <div className="mt-6 space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12 text-gray-900 dark:text-white">
              Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[{ Icon: Zap, title: "Remix Run", description: "Fast, modern web framework with server-side rendering and efficient data loading." },
                { Icon: Palette, title: "ShadCN UI", description: "Beautiful, customizable UI components for rapid development." },
                { Icon: Database, title: "Supabase", description: "Open-source Firebase alternative with authentication and real-time database." },
                { Icon: Shield, title: "Type-Safe", description: "Full TypeScript support for a robust development experience." },
              ].map(({ Icon, title, description }) => (
                <Card key={title}>
                  <CardHeader>
                    <Icon className="h-6 w-6 mb-2 text-primary-500" />
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section id="get-started" className="w-full py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
              Get Started Today
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Start building your next project with Remix, ShadCN UI, and Supabase.
              Clone the repository and follow the setup instructions to get up and running in minutes.
            </p>
            <div className="mt-6 space-x-4">
              <Button>Clone Repository</Button>
              <Button variant="outline">Read Docs</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gray-50 dark:bg-gray-900 border-t">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2023 Remix⚡ShadCN⚡Supabase Starter. All rights reserved.
          </p>
          <nav className="flex space-x-4">
            <Link
              to="#"
              className="text-xs text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="text-xs text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
