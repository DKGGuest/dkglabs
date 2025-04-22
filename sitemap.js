export default function handler(req, res) {
    const siteUrl = "https://www.dkglabs.com";

    const urls = [
        "/",
        "/about",
        "/services",
        "/contact"
    ]; // Add more URLs dynamically if needed

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
        .map((url) => {
            return `
    <url>
        <loc>${siteUrl}${url}</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>`;
        })
        .join("")}
</urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(sitemap);
}
