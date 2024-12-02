import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Hero Section */}
        <main className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Media Team Learning Hub
            </h1>
            <p className="text-xl text-muted-foreground">
              Your gateway to professional growth and skill development
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            {[
              {
                title: "Personalized Learning",
                description: "Tailored pathways based on your role and goals",
                icon: "📚",
              },
              {
                title: "Skill Tracking",
                description: "Monitor your progress and achievements",
                icon: "📈",
              },
              {
                title: "Team Collaboration",
                description: "Learn and grow together with your colleagues",
                icon: "🤝",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Access Dashboard
            </Link>
            <Link
              href="/register"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Register Now
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Media Team Learning Hub. All rights
            reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/help" className="hover:text-primary">
              Help Center
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
