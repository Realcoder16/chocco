const path = "/users/download/index.html"

const isHtml = HtmlFilter => {

  const html = '.html'
//const pathExt = HtmlFilter.slice(-5);
  if (HtmlFilter.includes(html))
  //if (pathExt==html)
  
  {

    return true
  }

  else {
    return false
  }

}



console.log(isHtml(path))
