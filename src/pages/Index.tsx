
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Cloud, Mail, Twitter, Github, CheckCircle, Building2, DollarSign, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Salted AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:prateekpal641@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/salted_ai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/saltedai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
          Revolutionizing AI Privacy & Security
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Keep Your Data
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Private</span>
          <br />
          While Using AI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          The first distributed AI inference platform that brings models to your data, 
          not your data to models. Enable AI adoption without compromising privacy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
            <a href="mailto:prateekpal641@gmail.com" className="flex items-center">
              Contact Us
            </a>
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI adoption is hindered by a fundamental privacy paradox
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <Lock className="w-8 h-8 text-red-600 mb-2" />
              <CardTitle className="text-red-800">Data Privacy Concerns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700">
                Businesses hesitate to adopt AI because it requires sending sensitive data to external LLM services, 
                creating security and compliance risks.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader>
              <Building2 className="w-8 h-8 text-orange-600 mb-2" />
              <CardTitle className="text-orange-800">Enterprise Barriers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700">
                Financial institutions, healthcare, and other regulated industries 
                can't risk data breaches or compliance violations.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-yellow-200 bg-yellow-50/50">
            <CardHeader>
              <DollarSign className="w-8 h-8 text-yellow-600 mb-2" />
              <CardTitle className="text-yellow-800">Missed Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-700">
                Low AI adoption rates mean businesses miss out on efficiency gains, 
                cost savings, and competitive advantages.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Distributed AI inference that keeps your data where it belongs - with you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Client-Side Deployment</h4>
                    <p className="text-gray-600">Minimal computation layer deployed at your infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Weight Streaming</h4>
                    <p className="text-gray-600">Model weights stream unidirectionally from our servers to your environment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Processing</h4>
                    <p className="text-gray-600">AI inference happens locally with your data, results cached on your system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Zero Data Transfer</h4>
                    <p className="text-gray-600">Your sensitive data never leaves your infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Traditional AI vs Salted AI</h4>
                <div className="space-y-6">
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h5 className="font-medium text-red-800 mb-2">❌ Traditional Approach</h5>
                    <p className="text-sm text-red-700">Data → Cloud → AI Model → Results</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h5 className="font-medium text-green-800 mb-2">✅ Salted AI Approach</h5>
                    <p className="text-sm text-green-700">AI Weights → Your Infrastructure → Results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Salted AI</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-blue-200 bg-blue-50/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle className="text-blue-800">Maximum Privacy</CardTitle>
              <CardDescription>Your data stays completely within your infrastructure</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-green-200 bg-green-50/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle className="text-green-800">High Performance</CardTitle>
              <CardDescription>Optimized distributed inference with local caching</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-purple-200 bg-purple-50/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Cloud className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle className="text-purple-800">Easy Integration</CardTitle>
              <CardDescription>Minimal setup, works with your existing infrastructure</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Enable AI Without Compromising Privacy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the privacy-first AI revolution. Contact us to learn how Salted AI can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              <a href="mailto:prateekpal641@gmail.com" className="flex items-center">
                <Mail className="mr-2 w-5 h-5" />
                Get in Touch
              </a>
            </Button>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com/salted_ai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com/saltedai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="font-semibold">Salted AI</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Salted AI. Revolutionizing AI privacy.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
