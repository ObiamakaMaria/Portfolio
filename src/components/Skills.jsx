const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 75 },
    { name: 'TailwindCSS', level: 85 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'MYSQL', level: 70 },
    { name: 'RESTful APIs', level: 90 },
    { name: 'GraphQL', level: 65 },
    { name: 'Python', level: 75 },
    { name: 'Flask', level: 70 },
  ];

  const otherSkills = [
    { name: 'Git', level: 85 },
    { name: 'AWS', level: 70 },
    { name: 'Content Creation', level: 95 },
    { name: 'Presntation', level: 98 },
    { name: 'Video Editing', level: 90 },
    { name: 'Photography', level: 90 },
  ];

  const SkillBar = ({ name, level }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">Here are my technical skills and proficiency levels</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Backend Development</h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Other Skills</h3>
            {otherSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
