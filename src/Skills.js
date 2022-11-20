import { useState } from "react";

function SkillsForm(name, level) {
    const [skills, setSkills] = useState([])
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setSkills(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        skillList.push(skills)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Skill: 
            <input type="text" name="name" onChange={handleChange}/>
            </label>
            <label>Ability:
            <select name='level'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </label>
            <input type="submit"/>
        </form>
        </>
    )
}

export default SkillsForm