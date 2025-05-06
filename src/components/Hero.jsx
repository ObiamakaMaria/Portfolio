import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Software Developer', 'Solidity Developer', 'Blockchain Developer', 'Full Stack Developer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-blue-400">Obiamaka Aghadiuno</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          I'm a <span className="text-blue-400 h-8 inline-block">{text}</span>
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          I build exceptional and accessible digital experiences for the web and blockchain.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="#contact" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="bg-transparent hover:bg-blue-500 text-blue-400 hover:text-white font-bold py-3 px-6 border border-blue-400 hover:border-transparent rounded-lg transition-colors duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
