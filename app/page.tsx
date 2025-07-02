import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Users, Zap, BookOpen, TrendingUp, Code, Palette } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const blogCategories = [
    {
      title: "Glow Live",
      description: "Get The Latest Information On Your Favorite Streamers", 
      icon: Code,
      posts: 24,
      category: "Streaming",
      color: "bg-emerald-500",
    },
    {
      title: "Glow Client",
      description: "Get The Latest Streamer Info On Your Desktop",
      icon: Palette,
      posts: 18,
      category: "Clients",
      color: "bg-purple-500",
    },
    {
      title: "Glow Chat",
      description: "Chat With Your Friends",
      icon: TrendingUp,
      posts: 31,
      category: "Communcation",
      color: "bg-orange-500",
    },
    {
      title: "Glow Gaming",
      description: "Get The Latest Games And Info",
      icon: Globe,
      posts: 27,
      category: "Entertainment",
      color: "bg-rose-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">Glow Corp</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#blogs" className="text-muted-foreground hover:text-foreground transition-colors">
              Blogs
            </Link>
            <Button>Contact Us</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
              Illuminating Digital Excellence
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
                Glow Corp
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We create digital experiences to make your life easier. From getting the latest information on your
              favorite streamers to providing desktop clients and communication tools, we illuminate your digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Explore Our Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Glow Corp</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're passionate about creating solutions that make a lasting impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-foreground">Functionality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Our designs prioritize user experience and functionality, ensuring that every interaction is seamless and
                  intuitive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-foreground">User-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We put users at the heart of everything we do, crafting experiences that resonate and engage with your
                  audience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-foreground">Time Saver</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Our solutions are designed to save you time and effort, allowing you to focus on what matters most—growing
                  your business.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Glow Corp, we strive to illuminate the digital landscape with innovative solutions that empower
                  individuals and businesses alike. Our mission is to create products that save our users time and enhance their
                  digital experiences.
                </p>
                <Button className="bg-emerald-600 hover:bg-emerald-700">Join Our Journey</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">140+</div>
                  <div className="text-muted-foreground">Streamers Tracked</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">2</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories Section */}
      <section id="blogs" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Blog Network</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore insights, tips, and trends across our specialized blog platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogCategories.map((blog, index) => {
              const IconComponent = blog.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 ${blog.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-foreground">{blog.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{blog.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-muted">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {blog.posts} posts
                      </Badge>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <Link href={`/blogs/${blog.category}`}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-foreground group-hover:text-background transition-colors bg-transparent"
                      >
                        View Blog
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-foreground border-border hover:bg-foreground hover:text-background">
              View All Blogs
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">Glow Corp</span>
              </div>
              <p className="text-muted-foreground">
                Illuminating digital excellence through innovative solutions and creative design.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
               <a href="https://glowlive.netlify.app">GlowLiveV1</a>
               <li><a href="https://glowchatoffical.netlify.app">GlowChatV1</a></li>
                <li><a href="https://glowclient.netlify.app/">GlowClient</a></li> 
               <li><a href="officalthegamezone.netlify.app">GlowGaming</a></li> 
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Glow Corp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
