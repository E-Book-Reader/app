interface PagesProps {
  page: number;
  pages: number;
  setPage: (page: number) => void;
}

import EditableText from "../../../../core/components/EditableText";

const Pages = ({ page, pages, setPage }: PagesProps) => {
  return (
    <div className="flex items-center justify-center gap-2 font-bold text-lg text-black text-center">
      <EditableText
        className="bg-transparent text-center w-10 text-orange-400"
        value={String(page)}
        validate={(v) => true}
        onRelease={() => ""}
        setValue={(v) => setPage(parseInt(v, 10))}
      />
      {/*
        <div>/</div>
        <div>{pages}</div>
      */}
    </div>
  );
};

export default Pages;
