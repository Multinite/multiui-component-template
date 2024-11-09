import { createComponent } from "@multinite_official/multiui";

export const createButton = createComponent({
  name: "button",
  createComponnetFn(componentProps, args) {
    return <button {...componentProps}>{componentProps.children}</button>;
  },
});
