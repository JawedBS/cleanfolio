import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Compétences</h2>

      {skills.languages && (
        <>
          <h3 className='skills__category'>Langages</h3>
          <ul className='skills__list'>
            {skills.languages.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            ))}
          </ul>
        </>
      )}

      {skills.frameworks && (
        <>
          <h3 className='skills__category'>Frameworks & Librairies</h3>
          <ul className='skills__list'>
            {skills.frameworks.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            ))}
          </ul>
        </>
      )}

      {skills.tools && (
        <>
          <h3 className='skills__category'>Outils</h3>
          <ul className='skills__list'>
            {skills.tools.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            ))}
          </ul>
        </>
      )}

      {skills.others && (
        <>
          <h3 className='skills__category'>Autres compétences</h3>
          <ul className='skills__list'>
            {skills.others.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}

export default Skills
