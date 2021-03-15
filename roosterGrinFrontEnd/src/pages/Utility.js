const Utility = () => {
  return(
    <>
      <form>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Page Item</label>
          <select className="form-control" id="exampleFormControlSelect1">
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
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Content</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </>
  )
}

export default Utility;
