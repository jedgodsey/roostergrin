import { useState, useEffect } from 'react';
import ContentModel from '../models/ContentModel';

const Utility = () => {
  let [ item, setItem ] = useState('grid1')
  let [ data, setData ] = useState({})
  let [ title, setTitle ] = useState('')
  let [ text, setText ] = useState('')

  const populate = () => {
    ContentModel.getOne(item)
      .then(info => {
        setData(info)
      })
  }

  const submit = () => {
    ContentModel.update(data)
  }

  console.log('your data: ', title)

  return(
    <>
      <form>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Page Item</label>
          <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => setItem(e.target.value)} >
            <option>Select Selement</option>
            <option>Grid 1</option>
            <option>Grid 2</option>
            <option>Grid 3</option>
            <option>Grid 4</option>
            <option>Slide 1</option>
            <option>Slide 2</option>
            <option>Slide 3</option>
          </select>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Title</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Content</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
      </form>
    </>
  )
}

export default Utility;
