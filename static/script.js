function create_read_button(link_to_news) {
    let anchor_tag = document.createElement('a')
    let centre_tag = document.createElement('centre')
    let button_tag = document.createElement('button')

    anchor_tag.setAttribute('href', link_to_news)
    button_tag.setAttribute('class', 'btn-primary')
    button_tag.innerHTML = "Read full News"
    anchor_tag.append(button_tag)
    centre_tag.append(anchor_tag)

    return centre_tag

}

const complete_url = "https://newsapi.padmashreejha.repl.co/data"
const news_list = document.getElementById("news_row")


$.get(complete_url, function (data){
    window.json = data
    console.log(data)
    const data_in_json = data['articles']
    

    for (let dataInJsonKey in data_in_json) {
        let div_tag = document.createElement("div")
        div_tag.setAttribute('class', 'col-sm-12')
        let current_array = data_in_json[dataInJsonKey]
        console.log(current_array['author'])
        if (current_array['author'] !== "Hindi.Moneycontrol.com Team"){
            let content = current_array['content']
            let title = current_array['title']
            let title_tag = document.createElement("h3")
            title_tag.innerText = title + "\n"
            let content_tag = document.createElement('p')
            content_tag.innerText = "\n" + content
            div_tag.append(title_tag)
            div_tag.append(create_read_button(current_array['url']))
            div_tag.append(content_tag)
            let image = document.createElement("img")
            image.src = current_array['urlToImage']
            image.setAttribute("class", 'img-fluid d-block')
            div_tag.append(image)
            let div_tag_2 = document.createElement("div")
            div_tag_2.innerText = "\n\n\n\n"
            div_tag.append(div_tag_2)

            news_list.append(div_tag)
        }

    }




});




