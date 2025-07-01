import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Users, Zap, BookOpen, TrendingUp, Code, Palette } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const blogCategories = [
    {
      title: "Tech Insights",
      description: "Latest trends in technology and innovation",
      icon: Code,
      posts: 24,
      category: "technology",
      color: "bg-emerald-500",
    },
    {
      title: "Design Studio",
      description: "Creative design tips and inspiration",
      icon: Palette,
      posts: 18,
      category: "design",
      color: "bg-purple-500",
    },
    {
      title: "Business Growth",
      description: "Strategies for scaling your business",
      icon: TrendingUp,
      posts: 31,
      category: "business",
      color: "bg-orange-500",
    },
    {
      title: "Digital Marketing",
      description: "Marketing insights and best practices",
      icon: Globe,
      posts: 27,
      category: "marketing",
      color: "bg-rose-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-800">Glow Corp</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-slate-600 hover:text-slate-800 transition-colors">
              About
            </Link>
            <Link href="#blogs" className="text-slate-600 hover:text-slate-800 transition-colors">
              Blogs
            </Link>
            <Button>Contact Us</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
              Illuminating Digital Excellence
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
                Glow Corp
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We create digital experiences that shine. From innovative technology solutions to creative design, we help
              businesses illuminate their potential in the digital world.
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
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Glow Corp</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We're passionate about creating digital solutions that make a lasting impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-slate-800">Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  We stay ahead of the curve, embracing cutting-edge technologies to deliver solutions that drive real
                  results for our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-slate-800">Client-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Your success is our success. We work closely with each client to understand their unique needs and
                  deliver tailored solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-slate-800">Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  From startups to enterprises, we've helped businesses across the globe transform their digital
                  presence and achieve their goals.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  At Glow Corp, we believe every business has the potential to shine in the digital landscape. Our
                  mission is to illuminate that potential through innovative design, cutting-edge technology, and
                  strategic thinking that drives measurable results.
                </p>
                <Button className="bg-emerald-600 hover:bg-emerald-700">Join Our Journey</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">150+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">50+</div>
                  <div className="text-slate-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">5</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">24/7</div>
                  <div className="text-slate-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories Section */}
      <section id="blogs" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Blog Network</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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
                    <CardTitle className="text-slate-800">{blog.title}</CardTitle>
                    <CardDescription>{blog.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-slate-100">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {blog.posts} posts
                      </Badge>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                    </div>
                    <Link href={`/blogs/${blog.category}`}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-slate-800 group-hover:text-white transition-colors bg-transparent"
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
            <Button size="lg" variant="outline">
              View All Blogs
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">Glow Corp</span>
              </div>
              <p className="text-slate-400">
                Illuminating digital excellence through innovative solutions and creative design.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Web Development</li>
                <li>Digital Marketing</li>
                <li>Brand Design</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Glow Corp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
