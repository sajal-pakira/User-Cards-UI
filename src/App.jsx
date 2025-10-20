import Card from "./components/Card";

const App = () => {
  const users = [
    {
      availability: "Available",
      pay: "$55/hour",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Carter",
      about1: "App Developer",
      about2: "Freelancer",
      skills: ["React Native", "Java", "Firebase", "Git"],
      bio: "Passionate about building smooth and scalable mobile apps.",
    },
    {
      availability: "Not Available",
      pay: "$70/hour",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Emily Zhao",
      about1: "UI/UX Designer",
      about2: "Employee",
      skills: ["Figma", "Adobe XD", "Sketch", "User Research"],
      bio: "Designing user-centric interfaces that make a difference.",
    },
    {
      availability: "Available",
      pay: "$65/hour",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Carlos Mendoza",
      about1: "DevOps Engineer",
      about2: "Freelancer",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
      bio: "Streamlining deployment pipelines for faster delivery.",
    },
    {
      availability: "Available",
      pay: "$80/hour",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Priya Verma",
      about1: "Data Scientist",
      about2: "Employee",
      skills: ["Python", "Pandas", "TensorFlow", "SQL"],
      bio: "Turning data into actionable insights using ML models.",
    },
    {
      availability: "Not Available",
      pay: "$90/hour",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Ali Hassan",
      about1: "Machine Learning Developer",
      about2: "Freelancer",
      skills: ["Scikit-learn", "PyTorch", "NLP", "MLflow"],
      bio: "Building intelligent systems that learn from data.",
    },
    {
      availability: "Available",
      pay: "$75/hour",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Laura Stein",
      about1: "Blockchain Developer",
      about2: "Freelancer",
      skills: ["Solidity", "Ethereum", "Web3.js", "Truffle"],
      bio: "Creating secure smart contracts and decentralized apps.",
    },
    {
      availability: "Not Available",
      pay: "$60/hour",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Ethan James",
      about1: "App Developer",
      about2: "Employee",
      skills: ["Swift", "Kotlin", "REST APIs", "CI/CD"],
      bio: "Loves crafting responsive and user-friendly mobile apps.",
    },
    {
      availability: "Available",
      pay: "$50/hour",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Natalie Wong",
      about1: "UI/UX Designer",
      about2: "Freelancer",
      skills: ["Wireframing", "Prototyping", "InVision", "HTML/CSS"],
      bio: "Designs intuitive experiences that delight users.",
    },
    {
      availability: "Available",
      pay: "$68/hour",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Samuel Green",
      about1: "DevOps Engineer",
      about2: "Employee",
      skills: ["Ansible", "CI/CD", "Azure", "Bash"],
      bio: "Focused on automating infrastructure and deployments.",
    },
    {
      availability: "Not Available",
      pay: "$85/hour",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      name: "Fatima Noor",
      about1: "Machine Learning Developer",
      about2: "Freelancer",
      skills: ["Deep Learning", "Data Engineering", "Keras", "SQL"],
      bio: "Solves real-world problems using AI and ML techniques.",
    },
  ];

  return (
    <div className="parent">
      {users.map((e, idx) => {
        return (
          <Card
            key={idx}
            availability={e.availability}
            pay={e.pay}
            image={e.image}
            name={e.name}
            about1={e.about1}
            about2={e.about2}
            skills={e.skills}
            bio={e.bio}
          />
        );
      })}
    </div>
  );
};

export default App;
