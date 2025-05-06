const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Decentralized NFT Minting Platform',
      description: 'This decentralized application (dApp) allows users to mint, view, and transfer NFTs. The NFTs features AI-generated images that are stored on IPFS, with metadata populated from the IPFS links. The platform is built with security and user experience in mind, implementing sequential minting and proper ownership verification.',
      image: 'https://i.imgur.com/7sXsNVf.png',
      technologies: ['React', 'Node.js', 'TailwindCSS', 'Solidity', 'Wagmi', 'IPFS'],
      liveLink: 'https://nft-dapp-x9h5.vercel.app/',
      codeLink: 'https://github.com/ObiamakaMaria/NFT_Dapp',
    },
    {
      id: 2,
      title: 'UniSwapV2 Interaction Dapp',
      description: 'A modern web application for exploring Uniswap V2 trading pairs. it allows you to search any Uniswap V2 pair by contract address and view detailed token information and reserves. It showcases a modern and responsive UI and a fast data fetching using multicall secure address validation.  ',
      image: 'https://i.imgur.com/QwTcHRS.png',
      technologies: ['React', 'Node.js', 'TailwindCSS', 'Solidity', 'ChakraUI', 'UniswapV2 Protocol'],
      liveLink: 'https://uni-swap-v2-interaction-dapp.vercel.app/',
      codeLink: 'https://github.com/ObiamakaMaria/UniSwapV2_Interaction_Dapp',
    },
    {
      id: 3,
      title: 'Decentralized Credit Builder Loan application',
      description: 'An innovative decentralized platform that helps individuals build verifiable credit histories on the blockchain through structured credit builder loans, creating financial inclusion for the underbanked while generating sustainable revenue through various service fees and marketplace opportunities.',
      image: 'https://i.imgur.com/lK6fbyN.png',
      technologies: ['React', 'Node.js', 'Solidity', 'TaiwindCSS', 'AppKit',],
      liveLink: 'https://github.com/ObiamakaMaria/credVerifyFrontend',
      codeLink: 'https://github.com/ObiamakaMaria/credVerifyFrontend',
    },
    {
      id: 4,
      title: 'Wagmi Wallet Connector',
      description: 'This project provides a simple and user-friendly Wallet Connect modal using Wagmi, a popular React hooks library for Ethereum-based wallets.It allows users to connect, disconnect wallets using multiple connectors (Injected Wallet) and switch networks between supported chains or networks  in a seamless manner.',
      image: 'https://i.postimg.cc/PfF90Jpv/walletconnect.png',
      technologies: ['React', 'Node.js', 'TailwindCSS', 'Solidity', 'Wagmi'],
      liveLink: 'https://wagmi-wallet-connector.vercel.app/',
      codeLink: 'https://github.com/ObiamakaMaria/Wagmi_Wallet_Connector',
    },
    // {
    //   id: 5,
    //   title: 'Fitness Tracker',
    //   description: 'A mobile-responsive application for tracking workouts, nutrition, and fitness goals with progress visualization and personalized recommendations.',
    //   image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //   technologies: ['React Native', 'Firebase', 'HealthKit API', 'Google Fit API'],
    //   liveLink: '#',
    //   codeLink: '#',
    // },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TailwindCSS to showcase projects and skills.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      technologies: ['React', 'TailwindCSS', 'Vite'],
      liveLink: '#',
      codeLink: '#',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">Here are some of my recent projects</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.liveLink} 
                    className="text-blue-500 hover:text-blue-700 font-medium flex items-center"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Source Code
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
