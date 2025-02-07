load('config.js');

function execute(url) {
    let response = fetch(url);
    if (!response.ok) return null;

    let doc = response.html();
    let jsonString = doc.select("script#__NEXT_DATA__").first().html();
    let json = JSON.parse(jsonString);

    Console.log(JSON.stringify(json));
    let comicData = json.props.pageProps.comic;

    let chapterResponse = fetch(CHAP + comicData.hid + "/chapters", {
        method: "GET",
        headers: {
            "referer": BASE
        },
        queries:
        {
            lang: LANG,
            limit: comicData.last_chapter
        }
    });

    if (!chapterResponse.ok) return null;

    let data = [];

    chapterResponse.json().chapters.forEach(x => {
        data.push({
            name: "Chapter " + x.chap,
            url: url + "/" + x.hid + "-chapter-" + x.chap + "-" + LANG
        })
    });

    return Response.success(data);
}