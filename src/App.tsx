import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Badge } from './components/ui/badge'
import { Separator } from './components/ui/separator'
import { 
  Copy, 
  Check,
  ExternalLink,
  Terminal,
  BookOpen,
  Users,
  Rocket,
  ArrowRight
} from 'lucide-react'

function App() {
  const [email, setEmail] = useState('')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const useCases = [
    {
      title: 'Batch AI Inference',
      image: 'https://docs.burla.dev/~gitbook/image?url=https%3A%2F%2F960315508-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FEZK1GDkJ4Bar9hojneh3%252Fuploads%252FAJiC7wUrKz1Ud4aMiTQm%252FScreenshot%25202025-07-13%2520at%25205.42.56%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D39c134b7-5b6e-4548-af00-e18c6c99f95d&width=245&dpr=4&quality=100&sign=aca7ce72&sv=2'
    },
    {
      title: 'Data Pipelines',
      image: 'https://docs.burla.dev/~gitbook/image?url=https%3A%2F%2F960315508-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FEZK1GDkJ4Bar9hojneh3%252Fuploads%252FZeav6O3IonCwJzWWQRbp%252FScreenshot%25202025-07-16%2520at%252011.41.14%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D23c04a6a-d939-482c-a286-e4792b431011&width=245&dpr=4&quality=100&sign=840cc465&sv=2'
    },
    {
      title: 'Computational Bio',
      image: 'https://docs.burla.dev/~gitbook/image?url=https%3A%2F%2F960315508-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FEZK1GDkJ4Bar9hojneh3%252Fuploads%252FZl52Sx7ZIsjqk9iqncwA%252FScreenshot%25202025-07-13%2520at%25205.42.46%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D5836b30e-4290-405e-97ff-53d0ae185b2b&width=245&dpr=4&quality=100&sign=29bcfba7&sv=2'
    },
    {
      title: 'Remote Dev Environments',
      image: 'https://docs.burla.dev/~gitbook/image?url=https%3A%2F%2F960315508-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FEZK1GDkJ4Bar9hojneh3%252Fuploads%252Fuj49pk2lpCpsMAgrfH4f%252FScreenshot%25202025-07-16%2520at%252012.27.14%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D0be53ec8-afba-4135-b9bb-65f12de55e6d&width=245&dpr=4&quality=100&sign=2538201f&sv=2'
    },
    {
      title: 'Data Prep',
      image: 'https://docs.burla.dev/~gitbook/image?url=https%3A%2F%2F960315508-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FEZK1GDkJ4Bar9hojneh3%252Fuploads%252FiuuysmWTxxFvE52DqLzN%252FScreenshot%25202025-07-13%2520at%25205.40.15%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3Dffe1f5fa-1455-44ca-bd35-00e6d1e5f360&width=245&dpr=4&quality=100&sign=98703957&sv=2'
    },
    {
      title: 'Background Task Queue',
      image: 'https://docs.burla.dev/~gitbook/image?url=https%3A%2F%2F960315508-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FEZK1GDkJ4Bar9hojneh3%252Fuploads%252F83Gu4mar8bGLS1ZlEBCs%252FScreenshot%25202025-07-16%2520at%252011.48.03%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3Dc9e4493a-4e54-47f1-977e-5056e9ce34a9&width=245&dpr=4&quality=100&sign=939d6cc7&sv=2'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">
                Burla
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors">Documentation</a>
              <a href="#examples" className="text-gray-600 hover:text-gray-900 transition-colors">Examples</a>
              <a href="#community" className="text-gray-600 hover:text-gray-900 transition-colors">Community</a>
              <Button variant="outline" size="sm">
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Run any Python script on 1000 computers in 1 second.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              With any hardware, in any docker container, self-hosted in your cloud.
            </p>
          </div>
        </div>
      </section>

      {/* One function, endless possibilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              One function, endless possibilities:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={useCase.image} 
                      alt={useCase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center">{useCase.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              How it works:
            </h2>
            <div className="max-w-4xl mx-auto text-left">
              <p className="text-lg text-gray-700 mb-6">
                Burla is an open-source platform for orchestrating Python in the cloud.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                The package only has one function:
              </p>
              
              <div className="bg-gray-900 rounded-lg p-6 mb-8 relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard('from burla import remote_parallel_map\n\ndef my_function(my_input):\n    print("I\'m running on my own separate computer in the cloud!")\n    \nremote_parallel_map(my_function, [1, 2, 3])', 'main-code')}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  {copiedCode === 'main-code' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
                <pre className="text-sm text-gray-100 font-mono leading-relaxed overflow-x-auto">
                  <code>{`from burla import remote_parallel_map

def my_function(my_input):
    print("I'm running on my own separate computer in the cloud!")
    
remote_parallel_map(my_function, [1, 2, 3])`}</code>
                </pre>
              </div>

              <p className="text-lg text-gray-700 mb-4">
                With Burla, running code in the cloud feels the same as coding locally:
              </p>
              <ul className="text-lg text-gray-700 mb-8 space-y-2">
                <li>• Anything you print appears your local terminal.</li>
                <li>• Exceptions thrown in your code are thrown on your local machine.</li>
                <li>• Responses are pretty quick, you can call a million simple functions in a couple seconds.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deploy in two commands */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Deploy in two commands:
            </h2>
            <div className="max-w-4xl mx-auto text-left">
              <p className="text-lg text-gray-700 mb-8">
                Run <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">pip install burla</code> then run <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">burla install</code> and that's it! (Currently Google Cloud only!)
              </p>
              
              <div className="text-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Getting Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Any Hardware, Any Container */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Any Hardware, Any Container:
            </h2>
            <div className="max-w-4xl mx-auto text-left">
              <p className="text-lg text-gray-700 mb-4">
                Run code in any Docker image with a public (or private) URI.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Scale across 10,000 CPU's, 100 H100's, use terabytes of RAM, or all the above.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay up to date:
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Submit
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Questions?
            </p>
            <p className="text-gray-600">
              Schedule a call, or email jake@burla.dev. We're always happy to talk.
            </p>
          </div>

          <Separator className="my-8 bg-gray-200" />

          <div className="text-center text-gray-500 text-sm">
            <p>Last updated 2 hours ago</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App