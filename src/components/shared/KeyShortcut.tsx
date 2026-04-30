type KeyShortcutProps = {
  title: string,
  shortcut: string
}

const KeyShortcut = ({title, shortcut}: KeyShortcutProps) => {
  return (
    <div className="flex justify-between items-center m-2">
      <span className="text-xs font-medium text-slate-500">{title}</span>
      <span className="text-xs font-medium text-slate-500">{shortcut}</span>
    </div>
  );
};

export default KeyShortcut;
