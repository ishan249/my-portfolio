import { generateSlug } from "../helper/general-func";
const blogsData = [
  {
    id: 1,
    title: "Hello World",
    summary: "I am finally starting writing blog",
    date: "16 June, 2024",
    content: `
    Hey Everybody, Welcome to my blog. I am Ishan, a frontend developer based in Gandhinagar, Gujarat. I wanted to start writing for a long time but I kept delaying/procrastinating it. So this time, I want to remain consistent. I will write about my learnings, what I am building, products, mistakes I make, things I learn, and my college and tech industry experiences from time to time.
    
    The thing is, I have been waiting for the right time to start writing for a very long time, but I have realized that the time is never right. You just have to start and learn on the go. The website is also not fully built; there might be bugs here and there, but I will improve it over time. Right now, I just want to start writing, learning, and building some new things to get back to coding and get into the flow that has been missing for a long time. Writing blog posts might give me the motivation to learn and build something new every day. Everything might not be about tech; sometimes, I will write out my thoughts on something to clear my head, but it will mostly be questions, confessions, and thoughts.
    
    That is it for my first blog post. Hopefully, many more to come. Hang in there.
    `,
    slug: generateSlug("Hello World"),
  },
  
];

export default blogsData;
