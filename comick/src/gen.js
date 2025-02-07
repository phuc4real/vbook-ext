load('config.js');

function execute(url, page) {
    if (!page) page = '1';
    
    let response = fetch(url, {
        method: "GET",
        queries:
        {
            limit: 12,
            page: page
        }
    });

    if (!response.ok) return null;

    let data = [];
    response.json().forEach(e => {
        data.push({
            name: e.title,
            link: COMIC + e.slug,
            cover:  IMG + e.md_covers[0].b2key,
            description: "Chapter " + e.last_chapter
        })
    });

    return Response.success(data, Number(page) + 1);
}