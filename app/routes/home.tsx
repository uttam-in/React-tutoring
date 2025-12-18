import { SimpleComponent, SimpleComponent2 } from "~/components";

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
      
        <SimpleComponent name="Ram" shape="36"/>
        <SimpleComponent2 name="Mounika" data={data_obj} />
    </div>
  );
}
