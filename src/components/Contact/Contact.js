import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      {contact.cta && <p className='contact__cta'>{contact.cta}</p>}
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Me contacter
        </span>
      </a>
    </section>
  )
}

export default Contact
