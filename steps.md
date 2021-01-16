npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
npm install gh-pages --save-dev
"deploy": "gatsby build --prefix-paths && gh-pages -d public"
Don’t forget to add your CNAME file to the static directory.
npm install gatsby-plugin-sitemap
`gatsby-plugin-sitemap`
    siteUrl: `https://www.noone.my.id`,