import {useState} from "react"
import './NewSkillForm.css'


export default function NewSkillForm({ addSkill}) {
    const [newSkill, setNewSkill] = useState({
        name: "",
        level: 3
    })
    function handleChange(evt) {
        const newNewSkill = {
            ...newSkill,
            [evt.target.name]: evt.target.value
        }
        setNewSkill(newNewSkill)
    }
    
    function handleAddSkill(evt) {
        evt.preventDefault();
        addSkill(newSkill)
        setNewSkill({
            name:'',
            level: 3
        })
}
return (
    <form className="NewSkillForm" onSubmit={handleAddSkill}>
        <label>Skill</label>
        <input
            value={newSkill.name}
            onChange={handleChange}
            name="name"
            type="text"
        />
        <label>Level</label>
        <select value={newSkill.level} onChange={handleChange} name="level" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        <button type="submit">ADD SKILL</button>

    </form>
)

}