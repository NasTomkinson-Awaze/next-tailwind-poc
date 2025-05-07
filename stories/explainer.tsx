export const Explainer = (props) => {
  return (
    <div className="flex flex-col justify-start gap-5">
      <div className="rounded border border-primary bg-primary-light p-8 shadow flex flex-col justify-start items-start gap-4">
        <h1 className="text-3xl text-color-primary">{props.title}</h1>
        <span className="text-sm italic"> {props.description}</span>
        <div className="flex flex-col justify-start items-start">
          <span className="text-sm"> Usage:</span>
          <span className="text-sm border border-primary rounded py-2 px-5 bg-white">
            {props.usage}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">{props.children}</div>
    </div>
  );
};
