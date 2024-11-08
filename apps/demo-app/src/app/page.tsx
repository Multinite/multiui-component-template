import Component from "my-component";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full gap-3">
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-2xl text-primary">No Children</h1>
        <div className="rounded-medium border border-default w-[500px] h-[300px] p-3 flex items-center justify-center">
          {/* @ts-ignore */}
          <Component />
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-2xl text-primary">With Children</h1>
        <div className="rounded-medium border border-default w-[500px] h-[300px] p-3 flex items-center justify-center">
          {/* @ts-ignore */}
          <Component>
            <p>Hello World</p>
          </Component>
        </div>
      </div>
    </div>
  );
}
