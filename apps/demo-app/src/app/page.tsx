import Component from "my-component";

export default function Home() {
  return (
    <div>
      <h1>No Children</h1>
      {/* @ts-ignore */}
      <Component />

      <hr />
      <h1>With Children</h1>
      <Component>
        <p>Hello World</p>
      </Component>
    </div>
  );
}
