
import './styles.css';
import NewSkillForm from './components/NewSkillForm';
import SkillList from './components/SkillList';
import { useState } from 'react';


function App() {
  const [skills, setSkills] = useState([
    {name: 'HTML', level: 5},
    {name: 'CSS', level: 3},
    {name: 'JavaScript', level: 4},
    {name: 'Python', level: 2},
  ])
  function addSkill(skill) {
    setSkills([...skills, skill])
  }

  return (
    <div>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr></hr>
      <NewSkillForm addSkill={addSkill} />
    </div>
    
  );
}

export default App;
