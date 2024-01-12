import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://duodentlab.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: "https://duodentlab.com/productos",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    }
  ];
}