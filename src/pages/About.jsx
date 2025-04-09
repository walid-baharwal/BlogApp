import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    if (window.gtag) {
      // Custom event to track when the user visits the blog page
      window.gtag('event', 'genrate_lead', {
       
      });
    }
  }, []);  // Empty array ensures this only runs once when the component mounts


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">About Us</h1>
          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
            We&apos;re passionate about creating meaningful connections through technology and innovation.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At BlogApp, we believe in the power of storytelling and knowledge sharing. Our platform 
              serves as a space where ideas flourish, conversations spark, and communities grow.
            </p>
            <p className="text-lg text-gray-600">
              We&apos;re committed to providing a seamless experience for both writers and readers, 
              ensuring that every voice can be heard and every story can be shared.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Constantly pushing boundaries to create better experiences</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building meaningful connections through shared stories</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">Maintaining high standards in everything we do</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                <p className="text-gray-600">Head of Content</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
                <p className="text-gray-600">Tech Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Want to Know More?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Whether you have questions about our platform or want to collaborate,
            we&apos;re here to help.
          </p>
          <button 
            type="button"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
