import './Extra.css'
import { extra } from '../../portfolio'

const Extra = () => {
  if (!extra || !extra.content?.length) return null

  return (
    <section className='section extra' id='extra'>
      <h2 className='section__title'>{extra.title}</h2>
      <div className='extra__blocks'>
      {extra.content.map(({ heading, text }) => (
  <div key={heading} className='extra__block'>
    <h3 className='extra__heading'>{heading}</h3>
    <p className='extra__text'>{text}</p>
  </div>
))}
      </div>
    </section>
  )
}

export default Extra
