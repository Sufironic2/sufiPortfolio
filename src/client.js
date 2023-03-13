import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "0bdqwg6y",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: "sktitJkkGwoIM0h6f8PUJvnP0uOaM5gF77CygzU7fO9JQoTaP9MErflUFplRPJaiqRuZBvmN7UhlLTve7F87eGNsXyoK90Fv1T4vdH6zsA7eRB226w3dalueCg0RlW6lCXhz0eSxXfue5pOPNwK5DnFVe4wLt5TlZt6IVwQ4N5AMEWoYj7SW",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
