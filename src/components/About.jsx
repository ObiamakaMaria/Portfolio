const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto border-4 border-white shadow-lg">
                <img 
                  src="https://i.imgur.com/rrT9msG.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                <span>2+ Years</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Software Developer & Blockchain Enthusiast</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am a passionate software developer and a blockchain enthusiast with hands-on experience building and deploying decentralized applications using Solidity, 
Hardhat,  Foundry and other Ethereum development tools.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in software development began in 2023 when I paticipated in the One year Full-stack software engineering program sponsored by Alx Africa, and since then, I have been constantly learning and improving my skills. I specialize in backend development using Python, with expertise in frameworks such as Flask and FastAPI. Proficient in designing RESTful APIs, database optimization using  MySQL, and cloud deployment using AWS. I am also proficient in frontend development with react and tailwindcss.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When I'm not coding, you can find me reading books, reading tech blogs, or seeing a good Law movie.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-bold text-gray-800">Education</h4>
                <p className="text-gray-600">B.S.c  Pysiology</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-bold text-gray-800">Location</h4>
                <p className="text-gray-600">Lagos, Nigeria</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-bold text-gray-800">Languages</h4>
                <p className="text-gray-600">English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
