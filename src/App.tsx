import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Badge } from './components/ui/badge'
import { Separator } from './components/ui/separator'
import { 
  Code2, 
  Zap, 
  Globe, 
  Shield, 
  ArrowRight, 
  Copy, 
  Check,
  Github,
  Twitter,
  Mail,
  ExternalLink,
  Cpu,
  Network,
  Database,
  Cloud,
  Terminal,
  BookOpen,
  Users,
  Rocket
} from 'lucide-react'

function App() {
  const [email, setEmail] = useState('')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [animatedCounters, setAnimatedCounters] = useState({
    nodes: 0,
    tasks: 0,
    uptime: 0
  })

  // Animated counters effect
  useEffect(() => {
    const targets = { nodes: 1000, tasks: 50000, uptime: 99.9 }
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setAnimatedCounters({
        nodes: Math.floor(targets.nodes * easeOut),
        tasks: Math.floor(targets.tasks * easeOut),
        uptime: Math.min(targets.uptime, (targets.uptime * easeOut))
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const codeExamples = [
    {
      id: 'install',
      title: 'Installation',
      code: 'pip install burla',
      language: 'bash'
    },
    {
      id: 'basic',
      title: 'Basic Usage',
      code: `from burla import remote

@remote
def process_data(data):
    # Your computation here
    return result

# Execute on distributed cluster
result = process_data.remote(my_data)`,
      language: 'python'
    },
    {
      id: 'parallel',
      title: 'Parallel Processing',
      code: `# Process multiple items in parallel
futures = [process_data.remote(item) for item in dataset]
results = [f.get() for f in futures]`,
      language: 'python'
    }
  ]

  const useCases = [
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Processing',
      description: 'Scale your data pipelines across thousands of nodes with automatic load balancing.',
      features: ['ETL Pipelines', 'Real-time Analytics', 'Batch Processing']
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Machine Learning',
      description: 'Train models faster with distributed computing and automatic resource management.',
      features: ['Model Training', 'Hyperparameter Tuning', 'Inference Scaling']
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: 'Web Scraping',
      description: 'Scrape websites at scale with built-in proxy rotation and rate limiting.',
      features: ['Proxy Management', 'Rate Limiting', 'Data Extraction']
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Computing',
      description: 'Deploy and scale applications across multiple cloud providers seamlessly.',
      features: ['Auto Scaling', 'Multi-Cloud', 'Cost Optimization']
    }
  ]

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Lightning Fast',
      description: 'Execute tasks with minimal latency across our global network'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure by Default',
      description: 'Enterprise-grade security with end-to-end encryption'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Scale',
      description: 'Access compute resources worldwide with automatic failover'
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Developer Friendly',
      description: 'Simple Python API that scales from prototype to production'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <Terminal className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Burla
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#docs" className="text-gray-600 hover:text-blue-600 transition-colors">Documentation</a>
              <a href="#examples" className="text-gray-600 hover:text-blue-600 transition-colors">Examples</a>
              <a href="#community" className="text-gray-600 hover:text-blue-600 transition-colors">Community</a>
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-green-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              <Rocket className="h-4 w-4 mr-2" />
              Now in Public Beta
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Distributed Computing
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Scale your Python applications across thousands of nodes with just a single decorator. 
              No infrastructure management, no complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {animatedCounters.nodes.toLocaleString()}+
                </div>
                <div className="text-gray-600">Active Nodes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {animatedCounters.tasks.toLocaleString()}+
                </div>
                <div className="text-gray-600">Tasks Executed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {animatedCounters.uptime.toFixed(1)}%
                </div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section id="examples" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your existing Python code into a distributed application with minimal changes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <Card key={example.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">
                      <span className="text-blue-600 mr-2">{index + 1}.</span>
                      {example.title}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(example.code, example.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copiedCode === example.id ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100 font-mono leading-relaxed">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Every Use Case
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From data processing to machine learning, Burla scales with your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-blue-600 group-hover:text-green-600 transition-colors">
                      {useCase.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Burla?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with performance, security, and developer experience in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-blue-600 group-hover:text-green-600 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest updates, tutorials, and best practices delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus:bg-white/20"
            />
            <Button variant="secondary" size="lg" className="px-8 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                  <Terminal className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Burla</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Making distributed computing accessible to every developer. 
                Scale your applications without the complexity.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Documentation</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Getting Started</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center">
                  Discord <ExternalLink className="h-3 w-3 ml-1" />
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center">
                  GitHub <ExternalLink className="h-3 w-3 ml-1" />
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Burla. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App