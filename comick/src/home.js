load('config.js');

function execute() {
    const homePages = [
        { title: "Latest", sort: "uploaded" },
        { title: "New", sort: "created_at" },
        { title: "Popular", sort: "user_follow_count" },
        { title: "Top Rating", sort: "rating" },
    ];

    return Response.success(
        homePages.map(x => ({ title: x.title, input: `${SEARCH}?sort=${x.sort}`, script: "gen.js" }))
    );
}