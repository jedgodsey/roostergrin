let url;
if (process.env.NODE_ENV === 'production') {
  url = `********* fill here ***********/content`;
} else {
  url = 'http://localhost:8000/content';
}

class ContentModel {

  static getOne(location) {
    return fetch(`${url}/${location}/`, {credentials: 'include'})
      .then(res => res.json())
      .catch(err => {
        console.log('error fetching data in MyndexModel.getOne: ', err)
        return {myndex: {}};
      })
  }

  static update(info) {
    return fetch(`${url}/${info.location}/`, {
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(info),
      credentials: 'include'
    })
      .then(res => console.log('this is your res: ', res.json()))
      .catch(err => {
        console.log('error fetching data in MyndexModel.update: ', err)
        return {message: 'error in update'};
      })
      .then(res => window.location.href = '/')
  }
}

export default ContentModel;
