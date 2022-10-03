const posts = [
    {
      title: "satu",
      body: "ini nomor satu"
    },
    {
      title: "dua",
      body: "ini nomor dua"
    }
  ]
  const createPost = post => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post)
        const error = false
        if(!error) {
          resolve()
        }else{
          reject()
        }
      }, 2000)
    })
  }
  const getPosts = () => {
    setTimeout(() => {
      posts.forEach(post => {
        console.log(post)
      })
    }, 1000)
  }
  const newPost = {
    title: "tiga",
    body: "ini nomor tiga"
  }
  
  createPost(newPost)
    .then(getPosts)
    .catch(error => console.log(error))