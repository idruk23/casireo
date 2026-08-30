import type { MetadataRoute } from 'next';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/'},sitemap:'https://casireo.com/sitemap.xml',host:'https://casireo.com'};}
