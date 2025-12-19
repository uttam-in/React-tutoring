import { LikeButton, NumberComponent, SimpleComponent2 } from "~/components";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  const data_obj = {
    name: "Uttam",
    age: 29,
    height: 5.1,
    weight: 30
  }

  return (
    <div>
       <button>Click me</button>
      
        <NumberComponent name="Ram" shape="36"/>
        <SimpleComponent2 name="Mounika" data={data_obj} />
        <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h2>My First Blog Post</h2>
          <p style={{ color: '#666', fontSize: '14px' }}>Posted on December 15, 2024</p>
          <p>
            Welcome to my blog! This is a simple blog post example. Here I can share my thoughts, 
            experiences, and interesting topics. React Router makes it easy to create dynamic web applications.
          </p>
          <p>
            In this post, I'm exploring how to build components and manage state in React. 
            It's amazing how powerful these tools can be for creating interactive user interfaces.
          </p>
          <LikeButton initialLikes={300}/>
        </div>


          <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h2>My First Blog Post</h2>
          <p style={{ color: '#666', fontSize: '14px' }}>Posted on December 15, 2024</p>
          <p>
            Welcome to my blog! This is a simple blog post example. Here I can share my thoughts, 
            experiences, and interesting topics. React Router makes it easy to create dynamic web applications.
          </p>
          <p>
            In this post, I'm exploring how to build components and manage state in React. 
            It's amazing how powerful these tools can be for creating interactive user interfaces.
          </p>
          <LikeButton initialLikes={400}/>
        </div>
        
        
    </div>
  );
}
