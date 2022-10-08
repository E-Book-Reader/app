const Progress = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full rounded h-2.5 overflow-hidden bg-gray-300">
      <div
        style={{ width: `${progress * 100}%` }}
        className="h-full bg-orange-400"
      />
    </div>
  );
};

export default Progress;
