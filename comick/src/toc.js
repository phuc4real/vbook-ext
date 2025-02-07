load('config.js');

function execute(url) {
    url = url.replace(/^https:\/\/comick\.io\/comic\//, "");
    // let response = fetch(url, {
    //     method: "GET",
    //     queries:
    //     {
    //         limit: 12,
    //         page: page
    //     }
    // });

    const data = [
        { name: "Latest", url: "uploaded" },
        { name: url, url: "uploaded" },
    ];

    return Response.success(data);
}