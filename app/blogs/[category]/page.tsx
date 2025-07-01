import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const blogData = {
  technology: {
    title: "Tech Insights",
    description: "Latest trends in technology and innovation",
    color: "emerald",
    posts: [
      {
        id: 1,
        title: "The Future of AI in Web Development",
        excerpt: "Exploring how artificial intelligence is revolutionizing the way we build websites and applications.",
        author: "Sarah Chen",
        date: "2024-01-15",
        readTime: "5 min read",
        tags: ["AI", "Web Development", "Future Tech"],
      },
      {
        id: 2,
        title: "Building Scalable Microservices Architecture",
        excerpt: "A comprehensive guide to designing and implementing microservices that can grow with your business.",
        author: "Mike Rodriguez",
        date: "2024-01-12",
        readTime: "8 min read",
        tags: ["Architecture", "Microservices", "Scalability"],
      },
      {
        id: 3,
        title: "Next.js 15: What's New and Exciting",
        excerpt:
          "Dive into the latest features and improvements in Next.js 15 and how they can enhance your development workflow.",
        author: "Alex Thompson",
        date: "2024-01-10",
        readTime: "6 min read",
        tags: ["Next.js", "React", "Web Framework"],
      },
    ],
  },
  design: {
    title: "Design Studio",
    description: "Creative design tips and inspiration",
    color: "purple",
    posts: [
      {
        id: 1,
        title: "Mastering Color Psychology in UI Design",
        excerpt: "Understanding how colors influence user behavior and emotions in digital interfaces.",
        author: "Emma Wilson",
        date: "2024-01-14",
        readTime: "7 min read",
        tags: ["UI Design", "Color Theory", "Psychology"],
      },
      {
        id: 2,
        title: "The Art of Minimalist Web Design",
        excerpt: "Creating powerful user experiences through simplicity and thoughtful design decisions.",
        author: "David Park",
        date: "2024-01-11",
        readTime: "5 min read",
        tags: ["Minimalism", "Web Design", "UX"],
      },
    ],
  },
  business: {
    title: "Business Growth",
    description: "Strategies for scaling your business",
    color: "orange",
    posts: [
      {
        id: 1,
        title: "Digital Transformation Strategies for SMBs",
        excerpt: "How small and medium businesses can leverage technology to compete with larger enterprises.",
        author: "Jennifer Lee",
        date: "2024-01-13",
        readTime: "9 min read",
        tags: ["Digital Transformation", "SMB", "Strategy"],
      },
      {
        id: 2,
        title: "Building a Remote-First Company Culture",
        excerpt:
          "Best practices for creating a thriving remote work environment that drives productivity and engagement.",
        author: "Robert Kim",
        date: "2024-01-09",
        readTime: "6 min read",
        tags: ["Remote Work", "Culture", "Management"],
      },
    ],
  },
  marketing: {
    title: "Digital Marketing",
    description: "Marketing insights and best practices",
    color: "rose",
    posts: [
      {
        id: 1,
        title: "SEO Trends to Watch in 2024",
        excerpt: "Stay ahead of the curve with the latest search engine optimization strategies and algorithm updates.",
        author: "Lisa Zhang",
        date: "2024-01-16",
        readTime: "7 min read",
        tags: ["SEO", "Digital Marketing", "Trends"],
      },
      {
        id: 2,
        title: "Content Marketing That Converts",
        excerpt: "Creating compelling content that not only engages your audience but drives real business results.",
        author: "Tom Anderson",
        date: "2024-01-08",
        readTime: "8 min read",
        tags: ["Content Marketing", "Conversion", "Strategy"],
      },
    ],
  },
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const blogInfo = blogData[category as keyof typeof blogData]

  if (!blogInfo) {
    notFound()
  }

  const colorClasses = {
    emerald: "from-emerald-500 to-emerald-700",
    purple: "from-purple-500 to-purple-700",
    orange: "from-orange-500 to-orange-700",
    rose: "from-rose-500 to-rose-700",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg font-semibold">Back to Home</span>
          </Link>
          <div className="text-2xl font-bold text-slate-800">Glow Corp</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1
              className={`text-5xl font-bold mb-4 bg-gradient-to-r ${colorClasses[blogInfo.color as keyof typeof colorClasses]} bg-clip-text text-transparent`}
            >
              {blogInfo.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8">{blogInfo.description}</p>
            <Badge className="mb-8 bg-slate-100 text-slate-700">{blogInfo.posts.length} Articles Available</Badge>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {blogInfo.posts.map((post) => (
              <Card
                key={post.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl text-slate-800 group-hover:text-slate-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
