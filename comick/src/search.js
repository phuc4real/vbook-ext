load('config.js');

function execute(key, page) {
    if (!page) page = '1';

    let response = fetch(SEARCH, {
        method: "GET",
        queries:
        {
            q: key,
            sort: "created_at",
            imit: 12,
            page: page
        }
    });

    if (!response.ok) return null;

    let result = [];
    response.json().forEach(e => {
        result.push({
            name: e.title,
            link: COMIC + e.slug,
            cover:  IMG + e.md_covers[0].b2key,
            description: "Chapter " + e.last_chapter
        })
    });

    return Response.success(result, Number(page) + 1);
}