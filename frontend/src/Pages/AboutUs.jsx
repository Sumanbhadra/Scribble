import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-purple-600 mb-6">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700">
            We are a passionate team dedicated to providing the best services and products for our customers. Our goal is to create innovative solutions that make a positive impact on the world.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to simplify your life with cutting-edge technology and services. We strive to make the world a better place by addressing real-world challenges with innovative solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-500">CTO</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Michael Lee</h3>
              <p className="text-gray-500">Lead Developer</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">
            If you have any questions or want to get in touch, feel free to reach out to us at <strong>contact@ourcompany.com</strong>.
          </p>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;
