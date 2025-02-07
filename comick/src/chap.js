load('config.js');

function execute(url) {
    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();
    let jsonString = doc.select("script#__NEXT_DATA__").first().html();
    let json = JSON.parse(jsonString);
    let result = json.props.pageProps.chapter.md_images;

    return Response.success(result.map(x => ({ link: IMG + x.b2key })));
}