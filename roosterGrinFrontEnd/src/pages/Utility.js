import { useState, useEffect } from 'react';
import ContentModel from '../models/ContentModel';
import Footer from '../components/Footer';
import hero from '../assets/hero.jpg';
import whitelogo from '../assets/logo-white.svg';
import orangebutton from '../assets/orange-button.png';

const Utility = () => {
  let [ item, setItem ] = useState('grid1')
  let [ title, setTitle ] = useState('')
  let [ text, setText ] = useState('')
  let [ id, setId ] = useState(0)

  const itemChange = (value) => {
    setItem(value)
    populate(value)
  }

  const populate = (choice) => {
    ContentModel.getOne(choice)
      .then(info => {
        setTitle(info.title)
        setText(info.text)
        setId(info.id)
      })
  }

  const submit = () => {
    let info = {
      location: item,
      title: title,
      text: text,
      id: id
    }
    ContentModel.update(info)
  }

  return(
    <section>
      <header>
        <img src={hero} id="header-hero" />
        <img src={whitelogo} id="header-logo" />
      </header>
      <form>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Page Item</label>
          <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => itemChange(e.target.value)} >
            <option>Select Element</option>
            <option>grid1</option>
            <option>grid2</option>
            <option>grid3</option>
            <option>grid4</option>
            <option>slide1</option>
            <option>slide2</option>
            <option>slide3</option>
          </select>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Title</label>
          <textarea className="form-control box1" id="exampleFormControlTextarea1" rows="3" value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Content</label>
          <textarea className="form-control box2" id="exampleFormControlTextarea1" rows="3" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
      </form>
      <input type="image" src={orangebutton} alt="Submit Form" onClick={() => submit()} id="submit" />
      <Footer />
    </section>
  )
}

export default Utility;
