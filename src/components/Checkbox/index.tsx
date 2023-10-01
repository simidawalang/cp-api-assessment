const Checkbox = ({ label }: { label?: string }) => {
  return (
    <label className="checkbox-container">
      <input type="checkbox" />
      <span className="checkmark" />
      <span className="input-label">{label}</span>
    </label>
  );
};

export default Checkbox;
