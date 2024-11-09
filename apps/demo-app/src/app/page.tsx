import { Button } from "my-component";

const componentWithoutChild = <Button />;

const componentWithChild = (
  <Button>
    <p>Hello World</p>
  </Button>
);

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full gap-3">
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-2xl text-primary">No Children</h1>
        <div className="rounded-medium border border-default w-[500px] h-[300px] p-3 flex items-center justify-center">
          {componentWithoutChild}
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-2xl text-primary">With Children</h1>
        <div className="rounded-medium border border-default w-[500px] h-[300px] p-3 flex items-center justify-center">
          {componentWithChild}
        </div>
      </div>
    </div>
  );
}
