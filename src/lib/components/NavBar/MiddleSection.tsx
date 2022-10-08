import { ViewContextWrapper } from "../../contexts";

const MiddleSection = ViewContextWrapper(({ viewContext }) => {
  const available = viewContext.content.navbar?.middle;

  return available ? (
    <div className="flex font-bold text-orange-400 gap-8 justify-center col-start-2">
      <div>{viewContext.content.navbar?.middle?.title}</div>
      <div>{viewContext.content.navbar?.middle?.action}</div>
    </div>
  ) : null;
});

export default MiddleSection;
